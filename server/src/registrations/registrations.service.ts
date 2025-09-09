import { Injectable, ConflictException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class RegistrationsService {
  private readonly logger = new Logger(RegistrationsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createRegistration(dto: CreateRegistrationDto) {
    try {
      const registration = await this.prisma.registration.create({
        data: {
          ...dto,
          participantDetails: dto.participantDetails
            ? dto.participantDetails.map((detail) => ({ ...detail }))
            : [],
        },
      });
      this.logger.log(
        `Successfully registered: ${dto.name} for event ${dto.event}`,
      );
      return registration;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const field = (error.meta as { target: string[] }).target[0];
        this.logger.warn(
          `Conflict error for ${field} on registration attempt.`,
        );
        throw new ConflictException(`${field} is already registered.`);
      }
      this.logger.error(
        'An unexpected error occurred during registration.',
        error.stack,
      );
      throw error;
    }
  }
}
