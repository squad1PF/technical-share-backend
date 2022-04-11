import { Router } from 'express'
import { CreateSkillController } from '../controllers/CreateSkillController'
import { FindAllSkillController } from '../controllers/FindAllSkillController'
import { FindSkillController } from '../controllers/FindSkillController'

const skillsRoutes = Router()

const createSkillController = new CreateSkillController()
const findAllSkillController = new FindAllSkillController()
const findSkillController = new FindSkillController()

skillsRoutes.post('/', createSkillController.handle)
skillsRoutes.get('/', findAllSkillController.handle)
skillsRoutes.get('/:id', findSkillController.handle)

export { skillsRoutes }
