import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
@Entity()
export class Service {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Column()
  price: number;
}
