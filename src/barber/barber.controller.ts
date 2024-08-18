import { Body, Controller, Post } from '@nestjs/common';
import { BarberService } from './barber.service';
import { Barber } from './entities';

@Controller('barber')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}

  @Post()
  create(@Body() barber: Barber): Promise<Barber> {
    return this.barberService.create(barber);
  }
}
