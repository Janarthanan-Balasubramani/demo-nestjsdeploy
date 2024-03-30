import { IsOptional } from 'class-validator';

export class CreateContactIdentifyDto {
  @IsOptional()
  email: string;

  @IsOptional()
  mobile: string;
}
