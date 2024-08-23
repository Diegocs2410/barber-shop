import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Admin } from './entities';
import { MongoRepository, ObjectId } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: MongoRepository<Admin>,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  async findOne(id: string): Promise<Admin> {
    try {
      const admin = await this.adminRepository.findOneBy(id);
      if (!admin) {
        throw new NotFoundException('Admin not found');
      }
      return admin;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async create(admin: Admin): Promise<Admin> {
    return await this.adminRepository.save(admin);
  }

  async update(id: string, admin: Admin): Promise<string> {
    try {
      const updatedAdmin = await this.adminRepository.findOneBy(id);
      if (!updatedAdmin) {
        throw new NotFoundException('Admin not found');
      }
      await this.adminRepository.update(id, admin);
      return 'Admin updated successfully';
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: ObjectId): Promise<string> {
    await this.adminRepository.deleteOne(id);
    return 'Admin removed successfully';
  }
}
