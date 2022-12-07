import { IsNotEmpty, Length } from 'class-validator';

export class CreateProductsRequest {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @Length(3, 355)
  name: string;
  id: number;
  description: string;
  price: number;
  category: string;
}
