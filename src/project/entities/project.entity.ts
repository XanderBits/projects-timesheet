import { User } from 'src/auth/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum AllowedStatus{
    'NOT_STARTED', 
    'IN_PROGRESS', 
    'COMPLETED',
}

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('char', {unique: true, length: 50})
    name: string;

    @Column('char', {length: 255}) 
    description: string;

    @Column({type: 'enum', enum: AllowedStatus})
    status: AllowedStatus

    @ManyToMany(() => User, user => user.project_ids)
    user_ids: User[]

    @Column()
    employer_ids: 
    
    @Column()
    client_ids: 

    @Column('timestamp')
    created_at: Date

    @Column('timestamp')
    updated_at: Date
    
    @Column('timestamp')
    deleted_at: Date
}
