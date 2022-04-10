import { UsersRepositories } from "../repositories/UsersRepositories";


interface IUserRequest {
  name: string;
  email: string;
}

class CreateUserService {
  async execute({name, email}: IUserRequest) {
    const usersRepository = new UsersRepositories();

    if(!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if(userAlreadyExists){
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService }