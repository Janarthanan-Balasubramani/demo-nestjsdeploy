import { Controller, Post, Body } from '@nestjs/common';
import { ContactIdentifyService } from './contact-identify.service';
import { CreateContactIdentifyDto } from './dto/create-contact-identify.dto';

@Controller('/identify')
export class ContactIdentifyController {
  constructor(
    private readonly contactIdentifyService: ContactIdentifyService,
  ) {}

  @Post()
  create(@Body() createContactIdentifyDto: CreateContactIdentifyDto) {
    return this.contactIdentifyService.create(createContactIdentifyDto);
  }
}
