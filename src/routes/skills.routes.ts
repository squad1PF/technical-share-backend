import { Router } from 'express'
import { SkillsController } from '../controllers/SkillsController'

const skillsRoutes = Router()
const skillsController = new SkillsController()

skillsRoutes.get('/', (request, response) => {
  skillsController.findAll(request, response)
})

skillsRoutes.get('/:id', (request, response) => {
  skillsController.find(request, response)
})

skillsRoutes.post('/', (request, response) => {
  skillsController.create(request, response)
})

skillsRoutes.put('/:id', (request, response) => {
  skillsController.update(request, response)
})

skillsRoutes.delete('/:id', (request, response) => {
  skillsController.delete(request, response)
})
export { skillsRoutes }
