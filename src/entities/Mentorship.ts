import { v4 as uuidV4 } from 'uuid'
import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import {User} from './User'

@Entity('mentorships')
class Mentorship {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  id_mentor: string;

  @JoinColumn({name: 'id_mentor'})
  @ManyToOne(() => User)
  idMentor: User

  @Column()
  id_mentored: string;

  @JoinColumn({name: 'id_mentored'})
  @ManyToOne(() => User)
  idMentored: User

  @CreateDateColumn()
  start_time: Date;

  @CreateDateColumn()
  end_time: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Mentorship }