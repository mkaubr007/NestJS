import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { StoreService } from '../store/store.service';
import { CreateProductRequest } from './create-product.dto';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private stotreService: StoreService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createProduct(@Body() product: CreateProductRequest) {
    const store = await this.stotreService.geStoreById(product.storeId);
    return await this.productService.createProduct(product, store);
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return await this.productService.getProductById(id);
  }

  @Get('name/:name')
  async getProductByName(@Param('name') name: string) {
    return await this.productService.getProductByName(name);
  }

  @Get()
  async getAllProduct() {
    return await this.productService.getAllProduct();
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: number) {
    return await this.productService.deleteProductById(id);
  }
}
