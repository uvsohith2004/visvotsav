import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleSheetService } from './google-sheet.service';

@Module({
  imports: [ConfigModule],
  providers: [GoogleSheetService],
  exports: [GoogleSheetService],
})
export class GoogleSheetModule {}
