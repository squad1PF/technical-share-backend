import { getCustomRepository } from 'typeorm'
import { SkillRepositories } from '../repositories/SkillsRepositories'

class FindSkillService {
  async show(name: string) {
    const skillRepository = getCustomRepository(SkillRepositories)

    const skill = await skillRepository.find({
      where: {
        name: `${name}`
      }
    })

    return skill
  }
}

export { FindSkillService }
