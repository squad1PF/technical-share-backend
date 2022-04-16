import { Request, Response } from 'express'
import { FindAllMentorshipsService } from '../services/FindAllMentorshipsService'

class FindAllMentorshipsController {
  async handle(request: Request, response: Response) {
    const findAllMentorshipsService = new FindAllMentorshipsService()
    const allMentorships = await findAllMentorshipsService.show()
    return response.json(allMentorships)
  }
}

export { FindAllMentorshipsController }