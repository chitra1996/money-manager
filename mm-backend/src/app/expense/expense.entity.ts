import { Category } from '../category/category.entity';
import { User } from '../user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Expense extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  user_id: string;

  @Column()
  description: string;

  @Column()
  classification: string;

  @ManyToOne(() => Category, (category) => category.id)
  category_id: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

export class ExpenseDTO {
  constructor(
    public id: string,
    public user_id: string,
    public description: string,
    public classification: string,
    public category_id: string,
    public amount: number,
    public createdAt?: Date,
    public deletedAt?: Date,
    public updatedAt?: Date,
  ) {}
}
