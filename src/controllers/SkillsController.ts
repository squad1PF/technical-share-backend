import { Request, Response } from 'express'
import { SkillsService } from '../services/SkillsService'

class SkillsController {
  async create(request: Request, response: Response) {
    const { name, level } = request.body
    const skillsService = new SkillsService()

    const skill = skillsService.execute({ name, level })
    return response.status(201).json(skill)
  }

  async findAll(request: Request, response: Response) {
    return response.send('Entrei no verbo GET. bati no controller')
  }

  async find(request: Request, response: Response) {
    const id = request.params.id

    return response.send(`Find By Id ${id}`)
  }

  async update(request: Request, response: Response) {
    const id = request.params.id
    return response.send('UPDATE')
  }

  async delete(request: Request, response: Response) {
    const id = request.params.id
    return response.send('DELETE')
  }
}

export { SkillsController }
