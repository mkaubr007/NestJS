import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
} from '@nestjs/common';
import { ManagerService } from '../manager/manager.service';
import { CreateStoreRequest } from './create-store.dto';
import { StoreService } from './store.service';
@Controller('store')
export class StoreController {
  constructor(
    private storeService: StoreService,
    private managerService: ManagerService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createStore(@Body() store: CreateStoreRequest) {
    const manager = await this.managerService.getManagerById(store.managerId);
    return await this.storeService.createStore(store, manager);
  }

  @Get(':id')
  async geStoreById(@Param('id') id: number) {
    return await this.storeService.geStoreById(id);
  }

  @Get(':pageWidth/:page')
  async gePageVal(
    @Param('pageWidth') pageWidth: number,
    @Param('page') page: number,
  ) {
    return await this.storeService.gePageVal(pageWidth, page);
  }

  @Get()
  async getAllStore() {
    return await this.storeService.getAllStore();
  }
}
