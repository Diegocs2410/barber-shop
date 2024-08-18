import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Service {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  price: number;
}
