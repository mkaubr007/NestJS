import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Manager } from '../manager/entities/manager.entity';
import { Product } from '../product/product.entity';

@Entity('store')
export class Store extends BaseEntity {
  @ApiProperty({ description: 'User unique ID', example: 1 })
  @PrimaryGeneratedColumn({ comment: 'This is unique to store' })
  id: number;

  @ApiProperty({ description: 'User name', example: 'XYZA' })
  @Column({ type: 'varchar' })
  name: string;

  @ApiProperty({ description: 'User description', example: 'learning' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: 'User account', example: 0 })
  @Column({ type: 'numeric', default: 0 })
  account: number;

  @ApiProperty({ description: 'User isActive', example: true })
  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @OneToMany(() => Product, (product) => product.store)
  products: Product[];

  @ManyToOne(() => Manager, (manager) => manager.store)
  manager: Manager;
}
