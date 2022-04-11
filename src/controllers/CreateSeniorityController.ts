import { Request, Response } from 'express'
import { CreateSeniorityService } from '../services/CreateSeniorityService'

class CreateSeniorityController {
  async handle(request: Request, response: Response) {
    const { name } = request.body
    const createSkillService = new CreateSeniorityService()
    const seniority = await createSkillService.execute({ name })
    return response.json(seniority)
  }
}

export { CreateSeniorityController }
