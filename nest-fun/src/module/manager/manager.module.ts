import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';

@Module({
  controllers: [ManagerController],
  imports: [TypeOrmModule.forFeature([Manager])],
  providers: [ManagerService],
})
export class ManagerModule {}
