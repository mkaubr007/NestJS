import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'This is unique to product' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'numeric', default: 0 })
  price: number;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;
}
