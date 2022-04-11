import { getCustomRepository } from 'typeorm'
import { SkillRepositories } from '../repositories/SkillsRepositories'

class FindAllSkillService {
  async show() {
    const skillRepository = getCustomRepository(SkillRepositories)
    const allSkills = await skillRepository.find()
    return allSkills
  }
}
export { FindAllSkillService }
