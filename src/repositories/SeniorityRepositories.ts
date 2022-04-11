import { EntityRepository, Repository } from 'typeorm'
import { Seniority } from '../entities/Seniority'

@EntityRepository(Seniority)
class SeniorityRepositories extends Repository<Seniority> {}

export { SeniorityRepositories }
