import { getCustomRepository } from 'typeorm'
import { SeniorityRepositories } from '../repositories/SeniorityRepositories'

class FindAllSeniorityService {
  async show() {
    const seniorityRepository = getCustomRepository(SeniorityRepositories)
    const allSeniority = await seniorityRepository.find()
    return allSeniority
  }
}
export { FindAllSeniorityService }
