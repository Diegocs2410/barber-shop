import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/utils/hash-password.util';
import { MongoRepository } from 'typeorm';
import { Client } from './entities';

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

  async update(id: string, client: Client) {
    try {
      const updatedClient = await this.clientRepository.findOneBy(id);
      if (!updatedClient) {
        throw new NotFoundException('Client not found');
      }
      await this.clientRepository.update(id, client);
      return 'Client updated successfully';
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string): Promise<{ message: string; status: number }> {
    try {
      const client = await this.clientRepository.findOneBy(id);
      if (!client) {
        throw new NotFoundException('Client not found');
      }
      await this.clientRepository.delete(id);
      return { message: 'Client removed successfully', status: 200 };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
