import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './entities';

@Controller('api/v1/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(id);
  }

  @Post()
  create(@Body() service: Service) {
    return this.servicesService.create(service);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() service: Service) {
    return this.servicesService.update(id, service);
  }
}
