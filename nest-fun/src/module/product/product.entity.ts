import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Store } from '../store/store.entity';

@Entity('product')
export class Product extends BaseEntity {
  @ApiProperty({ description: 'User unique ID', example: 1 })
  @PrimaryGeneratedColumn({ comment: 'This is unique to product' })
  id: number;

  @ApiProperty({ description: 'User name', example: 'XYZA' })
  @Column({ type: 'varchar' })
  name: string;

  @ApiProperty({ description: 'User description', example: 'learning' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: 'User price', example: 0 })
  @Column({ type: 'int', default: 0 })
  price: number;

  @ApiProperty({ description: 'User isActive', example: true })
  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @ManyToOne(() => Store, (store) => store.products)
  store: Store;
}
