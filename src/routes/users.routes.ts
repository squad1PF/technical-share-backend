import { Router } from 'express'

import { UsersRepositories } from '../repositories/UsersRepositories'

const usersRoutes = Router()
const usersRepository = new UsersRepositories()

usersRoutes.post('/', (request, response) => {
  const { name, email } = request.body

  usersRepository.create({ name, email })

  return response.status(201).send()
})

export { usersRoutes }
