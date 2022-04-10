import { v4 as uuidV4 } from 'uuid'
import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('users')
class User {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  email: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { User }
