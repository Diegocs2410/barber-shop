import { MiddlewareConsumer, Module } from '@nestjs/common';
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
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { ClientsService } from './clients/clients.service';
import { ClientsController } from './clients/clients.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ServicesService } from './services/services.service';
import { ServicesController } from './services/services.controller';

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
  controllers: [
    AppController,
    BarberController,
    AdminController,
    ClientsController,
    ServicesController,
  ],
  providers: [AppService, BarberService, AdminService, ClientsService, ServicesService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
