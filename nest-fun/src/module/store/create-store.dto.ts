import { IsNotEmpty, Length } from 'class-validator';

export class CreateStoreRequest {
  @IsNotEmpty({ message: 'Title cannot be empty' })
  @Length(3, 355)
  name: string;
  description: string;
  @IsNotEmpty({ message: 'Id cannot be empty' })
  managerId: number;
}
