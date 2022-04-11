import { EntityRepository, Repository } from 'typeorm'
import { Skill } from '../entities/Skill'

@EntityRepository(Skill)
class SkillRepositories extends Repository<Skill> {}

export { SkillRepositories }
