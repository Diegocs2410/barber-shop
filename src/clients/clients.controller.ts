import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './entities';

@Controller('api/v1/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() client: Client) {
    return this.clientsService.create(client);
  }
}
