import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BarberService } from './barber.service';
import { Barber } from './entities';
import { ObjectId } from 'typeorm';

@Controller('api/v1/barber')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Post()
  create(@Body() barber: Barber): Promise<Barber> {
    return this.barberService.create(barber);
  }
  @Get()
  findAll(): Promise<Barber[]> {
    return this.barberService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barberService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() barber: Barber) {
    return this.barberService.update(id, barber);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.barberService.remove(id);
  }
}
