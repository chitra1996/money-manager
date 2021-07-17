import { Budget } from "src/budget/budget.entity";
import { User } from "src/user/user.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Expense  extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => User, user => user.id)
    user_id: string;

    @Column()
    description: string;

    @Column()
    classification: string;

    @ManyToOne(() => Budget, budget => budget.id)
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