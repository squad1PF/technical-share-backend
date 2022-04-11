import { getCustomRepository } from 'typeorm'
import { SeniorityRepositories } from '../repositories/SeniorityRepositories'

interface ISkillRequest {
  name: string
}

class CreateSeniorityService {
  async execute({ name }: ISkillRequest) {
    const seniorityRepository = getCustomRepository(SeniorityRepositories)
    const seniorityAlreadyExists = await seniorityRepository.findOne({
      name
    })

    if (seniorityAlreadyExists) {
      throw new Error('Seniority already exists')
    }

    const seniority = seniorityRepository.create({
      name
    })

    await seniorityRepository.save(seniority)
    return seniority
  }
}

export { CreateSeniorityService }
