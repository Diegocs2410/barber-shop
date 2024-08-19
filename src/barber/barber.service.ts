import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectId } from 'typeorm';
import { Barber } from './entities';

@Injectable()
export class BarberService {
  constructor(
    @InjectRepository(Barber) private barberRepository: MongoRepository<Barber>,
  ) {}

  findAll(): Promise<Barber[]> {
    return this.barberRepository.find();
  }

  findOne(id: string): Promise<Barber> {
    return this.barberRepository.findOneBy(id);
  }

  async create(barber: Barber): Promise<Barber> {
    if (!barber.name || !barber.email || !barber.password) {
      throw new InternalServerErrorException('Missing required fields');
    }

    try {
      const barberExists = await this.barberRepository.findOne({
        where: { email: barber.email },
      });
      if (barberExists) {
        throw new InternalServerErrorException('Email already in use');
      }
      return this.barberRepository.save(barber);
    } catch (error) {
      throw new InternalServerErrorException('Email already in use');
    }
  }

  async update(id: ObjectId, barber: Barber): Promise<string> {
    try {
      const barberExists = await this.barberRepository.findOneBy(id);
      if (!barberExists) {
        throw new InternalServerErrorException('Barber not found');
      }
      await this.barberRepository.update(id, barber);
      return 'Barber updated successfully';
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: ObjectId): Promise<void> {
    try {
      const barberExists = await this.barberRepository.findOneBy(id);
      if (!barberExists) {
        throw new InternalServerErrorException('Barber not found');
      }
      await this.barberRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
