import { Request, Response } from 'express'
import { FindSkillService } from '../services/FindSkillService'

class FindSkillController {
  async handle(request: Request, response: Response) {
    const id = request.params.id

    const findSkillService = new FindSkillService()
    const skill = await findSkillService.show(id)
    return response.json(skill)
  }
}

export { FindSkillController }
