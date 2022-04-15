import { getCustomRepository } from 'typeorm';
import { MentorshipsRepositories } from '../repositories/MentorshipsRepositories';

interface IMentorshipRequest {
  id_mentor: string;
  id_mentored: string;
  start_time: Date;
  end_time: Date;
}

class CreateMentorshipService {
  async execute({ id_mentor, id_mentored, start_time, end_time }: IMentorshipRequest) {
    const mentorshipsRepositories = getCustomRepository(MentorshipsRepositories);

    const mentorship = mentorshipsRepositories.create({
      id_mentor,
      id_mentored,
      start_time,
      end_time
    })

    await mentorshipsRepositories.save(mentorship);

    return mentorship;
  }
}

export { CreateMentorshipService }