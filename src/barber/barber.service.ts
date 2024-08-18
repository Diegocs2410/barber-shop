import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Barber } from './entities';
import { ObjectId, Repository } from 'typeorm';

@Injectable()
export class BarberService {
  constructor(
    @InjectRepository(Barber) private barberRepository: Repository<Barber>,
  ) {}

  findAll(): Promise<Barber[]> {
    return this.barberRepository.find();
  }

  findOne(id: ObjectId): Promise<Barber> {
    return this.barberRepository.findOne({
      where: { id },
    });
  }

  create(barber: Barber): Promise<Barber> {
    if (!barber.name || !barber.email) {
      throw new InternalServerErrorException('Name and email are required');
    }

    return this.barberRepository.save(barber);
  }

  async update(id: ObjectId, barber: Barber): Promise<void> {
    // Find the barber with the given id and update it
    await this.barberRepository.update(id, barber);
  }

  async remove(id: string): Promise<void> {
    // Find the barber with the given id and delete it
    await this.barberRepository.delete(id);
  }
}
