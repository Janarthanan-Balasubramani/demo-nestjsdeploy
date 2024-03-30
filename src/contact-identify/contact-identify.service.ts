import { Injectable } from '@nestjs/common';
import { CreateContactIdentifyDto } from './dto/create-contact-identify.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContactIdentifyService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createContactIdentifyDto: CreateContactIdentifyDto) {
    const isMobileOrEmailAlreadyExist =
      await this.prismaService.contact.findFirst({
        where: {
          OR: [
            {
              email: {
                equals:createContactIdentifyDto.email
              },
            },
            {
             phoneNumber:{
              equals:createContactIdentifyDto.mobile

             }
            },
          ],
        },
        select: {
          id: true,
          email: true,
          phoneNumber: true,
        },
      });
console.log()
    if (isMobileOrEmailAlreadyExist) {
      console.log('isMobileOrEmailAlreadyExist');
      await this.prismaService.contact.create({
        data: {
          email: createContactIdentifyDto.email,
          phoneNumber: createContactIdentifyDto.mobile,
          linkPrecedence: 'Secondary',
          linkedId: isMobileOrEmailAlreadyExist.id,
        },
      });
      return {
        message: 'created successfully',
      };
    }
    await this.prismaService.contact.create({
      data: {
        email: createContactIdentifyDto.email,
        phoneNumber: createContactIdentifyDto.mobile,
        linkPrecedence: 'Primary',
      },
    });


    const primaryContactWithSecondaryContactResponse  = await this.prismaService.contact.findMany({
      where:{
        
            linkedId:1
          
        
      },
    })
  
    return {
      message: 'created successfully',
      primaryContactWithSecondaryContactResponse
    };
  }
}
