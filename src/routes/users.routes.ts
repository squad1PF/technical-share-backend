import { Router }  from 'express';
import { v4 as uuidV4 } from 'uuid';

const usersRoutes = Router();

const users = [];

usersRoutes.post("/", (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
    id: uuidV4(),
  }

  users.push(user);

  return response.status(201).send();
});

export { usersRoutes }