import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Client } from './entities';
import { hashPassword } from 'src/utils/hash-password.util';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientRepository: MongoRepository<Client>,
  ) {}

  async create(client: Client): Promise<Client> {
    try {
      const hashedPassword = await hashPassword(client.password);
      client.password = hashedPassword;
      return await this.clientRepository.save(client);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(): Promise<Client[]> {
    try {
      const clients = await this.clientRepository.find();
      return clients;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: string): Promise<Client> {
    try {
      const client = await this.clientRepository.findOneBy(id);
      if (!client) {
        throw new NotFoundException('Client not found');
      }
      return client;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, client: Client): Promise<Client> {
    try {
      await this.clientRepository.update(id, client);
      return client;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.clientRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
