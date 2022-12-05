import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateProductRequest } from './create-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productServeice: Repository<Product>,
  ) {}

  async createProduct(store: CreateProductRequest): Promise<Product> {
    return await this.productServeice.save({
      name: store.name,
      description: store.description,
    });
  }

  getProductById(id: number): Promise<Product> {
    return this.productServeice.findOne({ where: { id: id } });
  }

  getProductByName(name: string): Promise<Product[]> {
    console.log('hello');

    return this.productServeice.find({ where: { name: Like(`%${name}%`) } });
  }

  getAllProduct(): Promise<Product[]> {
    return this.productServeice.find();
  }

  deleteProductById(id: number) {
    return this.productServeice.delete({ id: id });
  }
}
