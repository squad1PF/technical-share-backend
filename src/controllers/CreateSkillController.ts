import { Request, Response } from 'express'
import { CreateSkillService } from '../services/CreateSkillService'

class CreateSkillController {
  async handle(request: Request, response: Response) {
    const { name, level } = request.body

    const createSkillService = new CreateSkillService()

    const skill = await createSkillService.execute({ name, level })

    return response.json(skill)
  }
}

export { CreateSkillController }
