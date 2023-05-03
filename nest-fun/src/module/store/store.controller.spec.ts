import { Test, TestingModule } from '@nestjs/testing';
import { Manager } from '../manager/entities/manager.entity';
import { ManagerService } from '../manager/manager.service';
import { StoreController } from './store.controller';
import { Store } from './store.entity';
import { StoreService } from './store.service';

describe('StoreController', () => {
  let controller: StoreController;
  // const mockStoreService = {
  //   createStore: jest.fn((dto) => {
  //     return {
  //       id: Date.now(),
  //       ...dto,
  //     };
  //   }),
  // };

  class mockStoreService {
    public createStore = jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    });
  }

  // const mockManagerService = {
  //   getManagerById: jest.fn((dto) => {
  //     return {
  //       ...dto,
  //     };
  //   }),
  // };

  class mockManagerService {
    getManagerById = jest.fn((dto) => {
      return {
        ...dto,
      };
    });
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Store, Manager],
      controllers: [StoreController],
      providers: [
        { provide: StoreService, useClass: mockStoreService },
        { provide: ManagerService, useClass: mockManagerService },
      ],
    }).compile();

    controller = module.get<StoreController>(StoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('shouls create a store', () => {
    const dto = { name: 'Harry', description: 'Learning', managerId: 4 };
    expect(controller.createStore(dto)).toEqual({
      id: expect.any(Number),
      name: dto.name,
      description: dto.description,
      managerId: dto.managerId,
    });
    // expect(mockStoreService.createStore).toHaveBeenCalledWith(dto);
  });

  //   it('should update books', () => {
  //     const dto = { title: 'Harry', author: 'Max', published: 2012 };
  //     expect(controller.gePageVal('1', dto)).toEqual({
  //       id: '1',
  //       ...dto,
  //     });
  //     expect(mockBookService.update).toHaveBeenCalled();
  //   });

  //   it('should return all books', () => {
  //     expect(controller.geStoreById());
  //     expect(mockBookService.findAll).toHaveBeenCalled();
  //   });

  //   it('should return bookById', () => {
  //     expect(controller.getAllStore('1')).toEqual({
  //       id: '1',
  //     });
  //   });
});
