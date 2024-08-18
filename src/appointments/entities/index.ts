import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

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

  @Column()
  barberID: string;

  @Column()
  state: string;

  @Column('array')
  services: {
    serviceID: string;
    serviceName: string;
    price: number;
  }[];
}
