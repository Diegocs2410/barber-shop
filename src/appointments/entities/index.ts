import { Barber } from 'src/barber/entities';
import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Appointment {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  clientID: string;

  @Column()
  clientName: string;

  @ManyToOne(() => Barber, barber => barber.appointments)
  barber: Barber;

  @Column()
  state: string;

  @Column('array')
  services: {
    serviceID: string;
    serviceName: string;
    price: number;
  }[];
}
