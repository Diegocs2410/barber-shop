import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Payment {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  appointmentId: string;

  @Column()
  amount: number;

  @Column()
  paymentMethod: string;

  @Column()
  date: Date;
}
