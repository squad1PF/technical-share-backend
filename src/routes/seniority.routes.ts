import { Router } from 'express'
import { CreateSeniorityController } from '../controllers/CreateSeniorityController'

const senioritiesRoutes = Router()

const createSeniorityController = new CreateSeniorityController()

senioritiesRoutes.post('/', createSeniorityController.handle)

export { senioritiesRoutes }
