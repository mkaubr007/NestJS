import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('store')
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'This is unique to store' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'numeric', default: 0 })
  account: number;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;
}
