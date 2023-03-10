import { User } from 'src/auth/entities/user.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  
  @Column('text', { unique: true })
  name: string;

  @ManyToMany(() => User, (user) => user.role_ids)
  user_ids: User[];

  @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.name = this.name.toLowerCase().trim();
    }
    
  @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }
}

