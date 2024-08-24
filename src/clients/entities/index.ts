import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
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
