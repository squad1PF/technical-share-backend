import { Request, Response } from 'express'
import { CreateMentorshipService } from '../services/CreateMentorshipService'

class CreateMentorshipController {

  async handle(request: Request, response: Response) {
    const { id_mentor, id_mentored, start_time, end_time } = request.body;

    const createMentorshipService = new CreateMentorshipService();

    const mentorship = await createMentorshipService.execute({
      id_mentor,
      id_mentored,
      start_time,
      end_time
    });

    return response.json(mentorship);
  }
}

export { CreateMentorshipController }