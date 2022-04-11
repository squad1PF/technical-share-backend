import { getCustomRepository } from 'typeorm'
import { SeniorityRepositories } from '../repositories/SeniorityRepositories'

class FindSeniorityService {
  async show(name: string) {
    const seniorityRepository = getCustomRepository(SeniorityRepositories)

    const seniority = await seniorityRepository.find({
      where: {
        name: `${name}`
      }
    })

    return seniority
  }
}

export { FindSeniorityService }
