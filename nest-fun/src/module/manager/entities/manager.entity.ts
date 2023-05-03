import { ApiProperty } from '@nestjs/swagger';
import { Store } from 'src/module/store/store.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('manager')
export class Manager extends BaseEntity {
  @ApiProperty({ description: 'User unique ID', example: 1 })
  @PrimaryGeneratedColumn({ comment: 'This is unique to product' })
  id: number;

  @ApiProperty({ description: 'User name', example: 'XYZA' })
  @Column({ type: 'varchar' })
  name: string;

  @ApiProperty({ description: 'User description', example: 'learning' })
  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Store, (store) => store.manager)
  store: Store[];
}
