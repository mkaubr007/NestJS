import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from '../store/store.entity';
import { StoreService } from '../store/store.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Store, Product])],
  providers: [StoreService, ProductService],
})
export class ProductModule {}
