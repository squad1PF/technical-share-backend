import { Router } from 'express'
import { CreateSkillController } from '../controllers/CreateSkillController'
import { FindAllSkillController } from '../controllers/FindAllSkillController'

const skillsRoutes = Router()

const createSkillController = new CreateSkillController()
const findAllSkillController = new FindAllSkillController()

skillsRoutes.post('/', createSkillController.handle)
skillsRoutes.get('/', findAllSkillController.handle)

export { skillsRoutes }
