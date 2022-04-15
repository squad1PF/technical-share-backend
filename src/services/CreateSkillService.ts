import { getCustomRepository } from 'typeorm'
import { SkillRepositories } from '../repositories/SkillsRepositories'

interface ISkillRequest {
  name: string
}

class CreateSkillService {
  async execute({ name }: ISkillRequest) {
    const skillRepository = getCustomRepository(SkillRepositories)

    const skillAlreadyExists = await skillRepository.findOne({
      name
    })

    if (skillAlreadyExists) {
      throw new Error('Skill already exists')
    }

    const skill = skillRepository.create({
      name
    })

    await skillRepository.save(skill)

    return skill
  }
}

export { CreateSkillService }
