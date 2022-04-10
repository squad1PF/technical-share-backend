import { Router } from 'express'
import { CreateSkillController } from '../controllers/CreateSkillController'

const skillsRoutes = Router()

const createSkillController = new CreateSkillController()

skillsRoutes.post('/', createSkillController.handle)

export { skillsRoutes }
