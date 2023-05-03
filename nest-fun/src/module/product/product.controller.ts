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
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger/dist/decorators';
import { Product } from './product.entity';
@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private stotreService: StoreService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({ description: 'Success', type: Product })
  @ApiBadRequestResponse({ description: 'Fail' })
  async createProduct(@Body() product: CreateProductRequest) {
    const store = await this.stotreService.geStoreById(product.storeId);
    return await this.productService.createProduct(product, store);
  }

  @Get(':id')
  @ApiCreatedResponse({ description: 'Success', type: Product })
  @ApiBadRequestResponse({ description: 'Fail' })
  async getProductById(@Param('id') id: number) {
    return await this.productService.getProductById(id);
  }

  @Get('name/:name')
  @ApiCreatedResponse({ description: 'Success', type: Product })
  @ApiBadRequestResponse({ description: 'Fail' })
  async getProductByName(@Param('name') name: string) {
    return await this.productService.getProductByName(name);
  }

  @Get()
  @ApiCreatedResponse({ description: 'Success', type: Product })
  @ApiBadRequestResponse({ description: 'Fail' })
  async getAllProduct() {
    return await this.productService.getAllProduct();
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Success', type: Product })
  @ApiBadRequestResponse({ description: 'Fail' })
  async deleteProductById(@Param('id') id: number) {
    return await this.productService.deleteProductById(id);
  }
}
