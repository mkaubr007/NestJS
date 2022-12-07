import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'This is unique to product' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'numeric', default: 0 })
  price: number;

  @Column({ type: 'text' })
  category: string;

  @Column({ type: 'boolean', default: false })
  onSale: boolean;

  @Column({ type: 'int', default: 0 })
  viewCount: number;

  @Column({ type: 'int', default: 0 })
  quantity: number;
}
