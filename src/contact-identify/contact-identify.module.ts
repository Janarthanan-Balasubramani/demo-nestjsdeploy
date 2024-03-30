import { Module } from '@nestjs/common';
import { ContactIdentifyService } from './contact-identify.service';
import { ContactIdentifyController } from './contact-identify.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContactIdentifyController],
  providers: [ContactIdentifyService, PrismaService],
})
export class ContactIdentifyModule {}
