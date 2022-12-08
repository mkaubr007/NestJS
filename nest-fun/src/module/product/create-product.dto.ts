import { IsNotEmpty, Length } from 'class-validator';

export class CreateProductRequest {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @Length(3, 355)
  @IsNotEmpty({ message: 'Description cannot be empty' })
  description: string;

  @IsNotEmpty({ message: 'Price cannot be empty' })
  price: number;

  @IsNotEmpty()
  storeId: number;
}
