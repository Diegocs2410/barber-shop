import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/entities';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Appointment } from './appointments/entities';
import { Barber } from './barber/entities';
import { Client } from './clients/entities';
import { Service } from './services/entities';
import { BarberController } from './barber/barber.controller';
import { BarberService } from './barber/barber.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://devdiego2024:DC242806..@rionprojects.0x8sc.mongodb.net/barbershop',
      entities: [Admin, Client, Service, Barber, Appointment],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Admin, Client, Service, Barber, Appointment]),
  ],
  controllers: [AppController, BarberController],
  providers: [AppService, BarberService],
})
export class AppModule {}
