import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IUserRequest {
  name: string
  email: string
  password: string
  role: string
  seniority: string
}

class CreateUserService {
  async execute({ name, email, password, role, seniority }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new Error('Email incorrect')
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = usersRepository.create({
      name,
      email,
      password,
      role,
      seniority
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
