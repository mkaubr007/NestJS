import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manager } from '../manager/entities/manager.entity';
import { CreateStoreRequest } from './create-store.dto';
import { Store } from './store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeServeice: Repository<Store>,
  ) {}

  async createStore(
    store: CreateStoreRequest,
    manager: Manager,
  ): Promise<Store> {
    const newProd = await this.storeServeice.save({
      name: store.name,
      description: store.description,
    });
    manager.store = [...manager.store, newProd];
    await manager.save();
    return newProd;
  }

  geStoreById(id: number): Promise<Store> {
    return this.storeServeice.findOne({
      where: { id: id },
      relations: ['products'],
    });
  }

  gePageVal(size: number, page: number) {
    return this.storeServeice.find({
      skip: (page - 1) * size,
      take: size,
      order: { name: 'DESC' },
    });
  }

  getAllStore(): Promise<Store[]> {
    return this.storeServeice.find();
  }
}
