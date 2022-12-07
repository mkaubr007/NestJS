import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductsService],
})
export class ProductsModule {}
