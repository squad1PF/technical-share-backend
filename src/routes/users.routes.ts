import { Router }  from 'express';

import { UsersRepository } from '../repositories/UsersRepository'

const usersRoutes = Router();
const usersRepository = new UsersRepository();

usersRoutes.post("/", (request, response) => {
  const { name, email } = request.body;

  usersRepository.create({ name, email });

  return response.status(201).send();
});

export { usersRoutes }