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
  @PrimaryGeneratedColumn({ comment: 'This is unique to product' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int', default: 0 })
  price: number;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  @ManyToOne(() => Store, (store) => store.products)
  store: Store;
}
