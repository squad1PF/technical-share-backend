import { Request, Response } from 'express'
import { FindAllSeniorityService } from '../services/FindAllSeniorityService'

class FindAllSeniorityController {
  async handle(request: Request, response: Response) {
    const findAllSeniorityService = new FindAllSeniorityService()
    const allSeniority = await findAllSeniorityService.show()
    return response.json(allSeniority)
  }
}

export { FindAllSeniorityController }
