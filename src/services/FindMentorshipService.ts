import { getCustomRepository } from 'typeorm'
import { MentorshipsRepositories } from '../repositories/MentorshipsRepositories'

class FindMentorshipService {
  async show(id: string) {
    const mentorshipRepository = getCustomRepository(MentorshipsRepositories)

    const mentorship = await mentorshipRepository.find({
      where: {
        id: `${id}`
      }
    })

    return mentorship
  }
}

export { FindMentorshipService}