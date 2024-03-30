import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactIdentifyModule } from './contact-identify/contact-identify.module';

@Module({
  imports: [ContactIdentifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
