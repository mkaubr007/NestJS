import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './module/store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductModule } from './module/product/product.module';
@Module({
  imports: [StoreModule, ProductModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
