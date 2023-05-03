import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateManagerDto {
  @ApiProperty({ description: 'Manager name', example: 'XYZA' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @ApiProperty({ description: 'Manager description', example: 'Learning' })
  @Length(3, 355)
  @IsNotEmpty({ message: 'Description cannot be empty' })
  description: string;
}
