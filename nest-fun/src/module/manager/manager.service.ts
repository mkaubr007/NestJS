import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager) private managerService: Repository<Manager>,
  ) {}

  async createManager(manager: CreateManagerDto): Promise<Manager> {
    return await this.managerService.save({
      name: manager.name,
      description: manager.description,
    });
  }

  findAll() {
    return `This action returns all manager`;
  }

  getManagerById(id: number): Promise<Manager> {
    return this.managerService.findOne({
      where: { id: id },
      relations: ['store'],
    });
  }

  update(id: number, updateManagerDto: UpdateManagerDto) {
    return `This action updates a #${id} manager`;
  }

  remove(id: number) {
    return `This action removes a #${id} manager`;
  }
}
