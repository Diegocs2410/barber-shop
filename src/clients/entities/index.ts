import { Barber } from 'src/barber/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Client {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'client' })
  role: string;

  @Column()
  phone: string;

  @Column({ default: 'active' })
  state: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  updatedBy: string;

  @OneToOne(() => Barber, barber => barber.clients)
  barber: Barber;
}
