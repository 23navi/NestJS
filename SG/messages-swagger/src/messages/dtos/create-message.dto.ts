import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @ApiProperty({
    description: 'Message content',
    example: 'Hello World!',
  })
  content: string;
}
