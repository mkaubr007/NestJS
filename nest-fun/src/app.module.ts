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
@Module({
  imports: [
    StoreModule,
    ProductModule,
    ProductsModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    ManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
