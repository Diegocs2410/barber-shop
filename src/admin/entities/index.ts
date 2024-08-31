import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Admin {
  @ObjectIdColumn()
  id: ObjectId;

  @IsNotEmpty()
  @MinLength(3)
  @Column()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Column()
  email: string;

  @MinLength(6)
  @IsAlphanumeric()
  @MaxLength(20)
  // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
  //   message: 'Password too weak',
  // })
  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
