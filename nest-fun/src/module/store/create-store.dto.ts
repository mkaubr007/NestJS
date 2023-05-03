import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateStoreRequest {
  @ApiProperty({ description: 'Store title', example: 'XYZA' })
  @IsNotEmpty({ message: 'Title cannot be empty' })
  @Length(3, 355)
  name: string;

  @ApiProperty({ description: 'Store description', example: 'XYZ store' })
  description: string;

  @ApiProperty({ description: 'Store managerId', example: 1 })
  @IsNotEmpty({ message: 'Id cannot be empty' })
  managerId: number;
}
