import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { GoogleSheetService } from '../google-sheet/google-sheet.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private isJobRunning = false;
  // Define max participants based on your constants. The highest is 4 for 'Dancing'.
  private readonly maxAdditionalParticipants = 4;

  constructor(
    private readonly prisma: PrismaService,
    private readonly googleSheets: GoogleSheetService,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    if (this.isJobRunning) {
      this.logger.warn('Skipping cron run, job already running.');
      return;
    }
    this.isJobRunning = true;
    this.logger.log('Running job: Syncing new registrations to Google Sheets...');

    const newRegistrations = await this.prisma.registration.findMany({
      where: { pushedToSheets: false },
      take: 500,
    });

    if (newRegistrations.length === 0) {
      this.logger.log('No new registrations to sync.');
      this.isJobRunning = false;
      return;
    }

    const registrationsByEvent = newRegistrations.reduce((acc, reg) => {
      if (!acc[reg.event]) {
        acc[reg.event] = [];
      }
      acc[reg.event].push(reg);
      return acc;
    }, {} as Record<string, typeof newRegistrations>);

    let successCount = 0;
    for (const eventName in registrationsByEvent) {
      const registrations = registrationsByEvent[eventName];
      const rowsToAppend = registrations.map(reg => {
        const participantNames = (reg.participantDetails as any[]).map(p => p.name);

        // Create a padded array for participant names
        // This ensures every row has the same number of columns
        const paddedNames = [
          ...participantNames,
          ...Array(this.maxAdditionalParticipants - participantNames.length).fill(''),
        ];
        
        return [
          reg.name,
          reg.phone,
          reg.email,
          reg.college,
          reg.eventType,
          reg.event,
          reg.branch,
          reg.duNumber,
          reg.participants,
          ...paddedNames, 
        ];
      });

      try {
        await this.googleSheets.appendRows(eventName, rowsToAppend);

        const successfulIds = registrations.map(r => r.id);
        await this.prisma.registration.updateMany({
          where: { id: { in: successfulIds } },
          data: { pushedToSheets: true },
        });

        successCount += registrations.length;
        this.logger.log(`Successfully synced ${registrations.length} registrations for event: ${eventName}`);
      } catch (error) {
        this.logger.error(`Failed to sync batch for event ${eventName}. Error: ${error.message}`);
      }
    }

    this.logger.log(`Job finished. Synced ${successCount} of ${newRegistrations.length} registrations.`);
    this.isJobRunning = false;
  }
}
