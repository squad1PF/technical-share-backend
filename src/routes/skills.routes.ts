import { Router } from 'express'

const skillsRoutes = Router()

skillsRoutes.get('/', (request, response) => {
  return response.send('Entrei no verbo GET.')
})

skillsRoutes.post('/', (request, response) => {
  return response.send('Entrei no verbo POST.')
})

export { skillsRoutes }
