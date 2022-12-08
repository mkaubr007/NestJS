import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from '../manager/entities/manager.entity';
import { ManagerService } from '../manager/manager.service';
import { StoreController } from './store.controller';
import { Store } from './store.entity';
import { StoreService } from './store.service';

@Module({
  controllers: [StoreController],
  imports: [TypeOrmModule.forFeature([Store, Manager])],
  providers: [ManagerService, StoreService],
})
export class StoreModule {}
