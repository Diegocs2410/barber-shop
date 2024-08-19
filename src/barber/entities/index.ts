import { Appointment } from 'src/appointments/entities';
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

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'barber' })
  role: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  state: string;

  @Column({ nullable: true })
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Appointment, appointment => appointment.barber)
  appointments: Appointment[];
}
