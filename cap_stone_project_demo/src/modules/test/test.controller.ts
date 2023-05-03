import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ErrorResponse } from '../swagger-api-responses/ApiResponses';
import { CreateTestDto } from './dto/create-test.dto';
import { Test } from './entities/test.entity';
import { TestService } from './test.service';

@ApiBadRequestResponse({
  description: 'request failed',
  type: ErrorResponse,
})
@ApiBearerAuth()
@ApiTags('lab test')
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Successfully adds a new test',
    type: Test,
  })
  @ApiOperation({
    summary: 'This end point creates pathology test data',
  })
  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    return await this.testService.create(createTestDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Successfully gets observations',
    type: Test,
    isArray: true,
  })
  @ApiOperation({
    summary: 'This end point will get Observations data',
  })
  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Successfully adds a new observation',
    type: Test,
  })
  @ApiOperation({
    summary: 'This end point will get Observation data for a given id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }
}
