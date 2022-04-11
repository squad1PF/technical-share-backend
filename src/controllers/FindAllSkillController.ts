import { Request, Response } from 'express'
import { FindAllSkillService } from '../services/FindAllSkillService'

class FindAllSkillController {
  async handle(request: Request, response: Response) {
    const findAllSkillService = new FindAllSkillService()
    const allSkill = await findAllSkillService.show()
    return response.json(allSkill)
  }
}

export { FindAllSkillController }
