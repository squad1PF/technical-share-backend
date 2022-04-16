import { getCustomRepository } from 'typeorm'
import { MentorshipsRepositories } from '../repositories/MentorshipsRepositories'

class FindAllMentorshipsService {
  async show() {
    const mentorshipsRepository = getCustomRepository(MentorshipsRepositories)
    const allMentorships = await mentorshipsRepository.find()
    return allMentorships
  }
}
export { FindAllMentorshipsService }