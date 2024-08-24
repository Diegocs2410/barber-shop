import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './entities';

@Controller('api/v1/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() client: Client) {
    return this.clientsService.create(client);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(id: string) {
    return this.clientsService.findOne(id);
  }

  @Put(':id')
  update(@Body() client: Client, id: string) {
    return this.clientsService.update(id, client);
  }

  @Delete(':id')
  remove(id: string) {
    return this.clientsService.remove(id);
  }
}
