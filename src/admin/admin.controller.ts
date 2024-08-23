import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './entities';
import { ObjectId } from 'typeorm';

@Controller('api/v1/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @Post()
  create(@Body() admin: Admin) {
    return this.adminService.create(admin);
  }

  @Put(':id')
  update(id: string, @Body() admin: Admin) {
    return this.adminService.update(id, admin);
  }

  @Delete(':id')
  remove(id: ObjectId) {
    return this.adminService.remove(id);
  }
}
