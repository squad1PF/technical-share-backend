import { Router }  from 'express';

const usersRoutes = Router();

const users = [];

usersRoutes.post("/users", (request, response) => {
  const { name, email } = request.body;

  users.push({
    name,
    email
  });

  return response.status(201).send();
});

export { usersRoutes }