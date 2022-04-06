import { User } from '../model/User'

interface ICreateUserDTO {
  name: string;
  email: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })
  
    this.users.push(user);
  }
}

export { UsersRepository }