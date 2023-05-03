import { Test, TestingModule } from '@nestjs/testing';
import { StoreService } from './store.service';
import { Store } from './store.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Manager } from '../manager/entities/manager.entity';

describe('StoreService', () => {
  let service: StoreService;
  const mockStoreModel = {
    create: jest.fn().mockImplementation((dto) => {
      dto;
    }),
    save: jest
      .fn()
      .mockImplementation((storeModule) =>
        Promise.resolve({ id: Date.now(), ...storeModule }),
      ),
    manager: jest.fn().mockReturnValue((entity: Manager) => {
      entity;
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoreService,
        {
          provide: getRepositoryToken(Store),
          useValue: mockStoreModel,
        },
      ],
    }).compile();

    service = module.get<StoreService>(StoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create  new store and return that ', async () => {
    const manager = jest
      .fn()
      .mockReturnValue({ id: 1, name: 'XYZAp', description: 'Learnig' });
    expect(
      await service.createStore(
        { name: 'Harry', description: 'Learnig', managerId: 4 },
        manager,
      ),
    ).toEqual({
      id: expect.any(Number),
      name: 'Harry',
      description: 'Learning',
      managerId: 4,
    });
  });
});
