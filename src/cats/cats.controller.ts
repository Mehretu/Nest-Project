import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';

import { UpdateCatDto } from './dto/update-cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'no-store') //To create custom response header
  create(): string {
    return 'This action adds new cat';
  }
  @Get()
  @Redirect('https://nestjs.com, 301')
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
  @Get()
  async findAlll(): Promise<any[]> {
    return [];
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto:UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }
  @Post()
  async crreate(@Body() createCatDto: CreateCatDto) {
    return 'This action adds new cat';
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
