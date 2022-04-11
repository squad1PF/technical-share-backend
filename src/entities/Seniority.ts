import { v4 as uuidV4 } from 'uuid'
import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity('seniority')
class Seniority {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Seniority }
