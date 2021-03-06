import { User } from '../user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  user_id: string;

  @Column()
  budget: number;

  @Column()
  category_name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

export class CategoryDTO {
  constructor(
    public id: string,
    public user_id: string,
    public budget: number,
    public category_name: string,
    public createdAt?: Date,
    public deletedAt?: Date,
    public updatedAt?: Date,
  ) {}
}
