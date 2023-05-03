import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './module/store/store.module';
import { ProductsModule } from './Asses1/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { ProductModule } from './module/product/product.module';
import { ConfigModule } from '@nestjs/config';
import { ManagerModule } from './module/manager/manager.module';
import { typeOrmConfig } from 'db/data-source';
import { DeliveryModule } from './module/delivery/delivery.module';
@Module({
  imports: [
    StoreModule,
    ProductModule,
    ProductsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    //TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    ManagerModule,
    DeliveryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
