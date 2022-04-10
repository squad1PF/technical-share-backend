import { v4 as uuidV4 } from 'uuid'
import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('skill')
class Skill {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  level: number

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Skill }
