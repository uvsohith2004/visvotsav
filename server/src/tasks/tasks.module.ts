import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';

import { GoogleSheetModule } from 'src/google-sheet/google-sheet.module';
import { PrismaModule} from '../prisma/prisma.module';
@Module({
  imports: [GoogleSheetModule, PrismaModule],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
