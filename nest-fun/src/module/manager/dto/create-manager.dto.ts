import { IsNotEmpty, Length } from 'class-validator';

export class CreateManagerDto {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @Length(3, 355)
  @IsNotEmpty({ message: 'Description cannot be empty' })
  description: string;
}
