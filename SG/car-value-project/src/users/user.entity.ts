import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  password: string;
  @Column()
  email: string;
  @AfterInsert()
  logInsert() {
    console.log(`${this.id} was inserted`);
  }
  @AfterUpdate()
  logUpdate() {
    console.log(`${this.id} was updated`);
  }
  @AfterRemove()
  logRemove() {
    console.log(`${this.id} was removed`);
  }
}
