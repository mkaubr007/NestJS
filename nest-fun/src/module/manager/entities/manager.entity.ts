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
  @PrimaryGeneratedColumn({ comment: 'This is unique to product' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Store, (store) => store.manager)
  store: Store[];
}
