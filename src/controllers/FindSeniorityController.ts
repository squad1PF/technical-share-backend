import { Request, Response } from 'express'
import { FindSeniorityService } from '../services/FindSeniorityService'

class FindSeniorityController {
  async handle(request: Request, response: Response) {
    const id = request.params.id

    const findSeniorityService = new FindSeniorityService()
    const seniority = await findSeniorityService.show(id)
    return response.json(seniority)
  }
}

export { FindSeniorityController }
