import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreRequest } from './create-store.dto';
import { Store } from './store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeServeice: Repository<Store>,
  ) {}

  async createStore(store: CreateStoreRequest): Promise<Store> {
    return await this.storeServeice.save({
      name: store.title,
      description: store.description,
    });
  }

  geStoreById(id: number): Promise<Store> {
    return this.storeServeice.findOne({ where: { id: id } });
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
