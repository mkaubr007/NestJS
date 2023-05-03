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
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger/dist';
import { Store } from './store.entity';

@ApiTags('store')
@Controller('store')
export class StoreController {
  constructor(
    private storeService: StoreService,
    private managerService: ManagerService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({ description: 'Success', type: Store })
  @ApiBadRequestResponse({ description: 'Fail' })
  async createStore(@Body() store: CreateStoreRequest) {
    const manager = await this.managerService.getManagerById(store.managerId);
    return await this.storeService.createStore(store, manager);
  }

  @Get(':id')
  @ApiCreatedResponse({ description: 'Success', type: Store })
  @ApiBadRequestResponse({ description: 'Fail' })
  async geStoreById(@Param('id') id: number) {
    return await this.storeService.geStoreById(id);
  }

  @Get(':pageWidth/:page')
  @ApiCreatedResponse({ description: 'Success', type: Store })
  @ApiBadRequestResponse({ description: 'Fail' })
  async gePageVal(
    @Param('pageWidth') pageWidth: number,
    @Param('page') page: number,
  ) {
    return await this.storeService.gePageVal(pageWidth, page);
  }

  @Get()
  @ApiCreatedResponse({ description: 'Success', type: Store })
  @ApiBadRequestResponse({ description: 'Sucess' })
  async getAllStore() {
    return await this.storeService.getAllStore();
  }
}
