import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateProductRequest {
  @ApiProperty({ description: 'Product name', example: 'XYZA' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @ApiProperty({ description: 'Product description', example: 'learning' })
  @Length(3, 355)
  @IsNotEmpty({ message: 'Description cannot be empty' })
  description: string;

  @ApiProperty({ description: 'Product price', example: 45 })
  @IsNotEmpty({ message: 'Price cannot be empty' })
  price: number;

  @ApiProperty({ description: 'Product storeId', example: 4 })
  @IsNotEmpty()
  storeId: number;
}
