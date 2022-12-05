import { IsNotEmpty, Length } from 'class-validator';

export class CreateProductRequest {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @Length(3, 355)
  name: string;
  description: string;
}
