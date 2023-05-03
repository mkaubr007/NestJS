import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger/dist/decorators';
import { Manager } from './entities/manager.entity';
@ApiTags('manager')
@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Success', type: Manager })
  @ApiBadRequestResponse({ description: 'Fail' })
  createManager(@Body() createManagerDto: CreateManagerDto) {
    return this.managerService.createManager(createManagerDto);
  }

  @Get()
  @ApiCreatedResponse({ description: 'Success', type: Manager })
  @ApiBadRequestResponse({ description: 'Fail' })
  findAll() {
    return this.managerService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ description: 'Success', type: Manager })
  @ApiBadRequestResponse({ description: 'Fail' })
  getManagerById(@Param('id') id: string) {
    return this.managerService.getManagerById(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ description: 'Success', type: Manager })
  @ApiBadRequestResponse({ description: 'Fail' })
  update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto) {
    return this.managerService.update(+id, updateManagerDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Success', type: Manager })
  @ApiBadRequestResponse({ description: 'Fail' })
  remove(@Param('id') id: string) {
    return this.managerService.remove(+id);
  }
}
