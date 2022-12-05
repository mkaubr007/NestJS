import { IsNotEmpty, Length } from 'class-validator';

export class CreateStoreRequest {
  @IsNotEmpty({ message: 'Title cannot be empty' })
  @Length(3, 355)
  title: string;
  // @IsNotEmpty({ message: 'id is not empty' })
  // id: number;
  description: string;
}
