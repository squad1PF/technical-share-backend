import { Router } from 'express'
import { CreateSeniorityController } from '../controllers/CreateSeniorityController'
import { FindAllSeniorityController } from '../controllers/FindAllSeniorityController'

const senioritiesRoutes = Router()

const createSeniorityController = new CreateSeniorityController()
const findAllSeniorityController = new FindAllSeniorityController()

senioritiesRoutes.post('/', createSeniorityController.handle)
senioritiesRoutes.get('/', findAllSeniorityController.handle)

export { senioritiesRoutes }
