import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { Appointment } from 'src/appointments/entities';
import { Client } from 'src/clients/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity('barber')
export class Barber {
  @ObjectIdColumn()
  id: ObjectId;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @Column()
  name: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsNotEmpty()
  @Column()
  password: string;

  @Column({ default: 'barber' })
  role: string;

  @IsPhoneNumber('CO')
  @Column({ nullable: true })
  phone: string;

  @Column()
  state: string;

  @IsString()
  @Column({ nullable: true })
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Appointment, appointment => appointment.barber)
  appointments: Appointment[];

  @OneToMany(() => Client, client => client.barber)
  clients: Client[];
}
