import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Service } from './entities';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: MongoRepository<Service>,
  ) {}

  async create(service: Service): Promise<Service> {
    try {
      return await this.serviceRepository.save(service);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(): Promise<Service[]> {
    try {
      const services = await this.serviceRepository.find();
      return services;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: string): Promise<Service> {
    try {
      const service = await this.serviceRepository.findOneBy(id);
      if (!service) {
        throw new NotFoundException('service not found');
      }
      return service;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, service: Service) {
    try {
      const updatedServiceData = await this.serviceRepository.findOneBy(id);
      if (!updatedServiceData) {
        throw new NotFoundException('service not found');
      }
      await this.serviceRepository.update(id, service);
      return 'service updated successfully';
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string): Promise<{ message: string; status: number }> {
    try {
      const service = await this.serviceRepository.findOneBy(id);
      if (!service) {
        throw new NotFoundException('Client not found');
      }
      await this.serviceRepository.delete(id);
      return { message: 'Client removed successfully', status: 200 };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
