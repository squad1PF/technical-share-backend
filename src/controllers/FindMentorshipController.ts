import { Request, Response } from 'express'
import { FindMentorshipService } from '../services/FindMentorshipService'

class FindMentorshipController {
  async handle(request: Request, response: Response) {
    const id = request.params.id

    const findMentorshipService = new FindMentorshipService()
    const mentorships = await findMentorshipService.show(id)
    return response.json(mentorships)
  }
}

export { FindMentorshipController }