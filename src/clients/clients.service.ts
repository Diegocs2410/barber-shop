import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Client } from './entities';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientRepository: MongoRepository<Client>,
  ) {}

  async create(client: Client): Promise<Client> {
    try {
      const newClient = await this.clientRepository.save(client);
      return newClient;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
