import { getCustomRepository } from 'typeorm'
import { SkillRepositories } from '../repositories/SkillsRepositories'

interface ISkillRequest {
  name: string
  level: number
}

class CreateSkillService {
  async execute({ name, level }: ISkillRequest) {
    const skillRepository = getCustomRepository(SkillRepositories)

    const skillAlreadyExists = await skillRepository.findOne({
      name
    })

    if (skillAlreadyExists) {
      throw new Error('User already exists')
    }

    const skill = skillRepository.create({
      name,
      level
    })

    await skillRepository.save(skill)

    return skill
  }
}

export { CreateSkillService }
