import { Router } from 'express'
import { CreateSeniorityController } from '../controllers/CreateSeniorityController'
import { FindAllSeniorityController } from '../controllers/FindAllSeniorityController'
import { FindSeniorityController } from '../controllers/FindSeniorityController'

const senioritiesRoutes = Router()

const createSeniorityController = new CreateSeniorityController()
const findAllSeniorityController = new FindAllSeniorityController()
const findSeniorityController = new FindSeniorityController()

senioritiesRoutes.post('/', createSeniorityController.handle)
senioritiesRoutes.get('/', findAllSeniorityController.handle)
senioritiesRoutes.get('/:id', findSeniorityController.handle)

export { senioritiesRoutes }
