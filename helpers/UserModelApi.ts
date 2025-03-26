import { faker } from '@faker-js/faker';

export class User {
  constructor(
    public email: string, 
    public username: string, 
    public name: string, 
    public password: string,
    public skip_confirmation: boolean = true
  ) {}

  static createUser(): User {
    const password = faker.internet.password(); 
    return new User(
      faker.internet.email(), 
      faker.internet.userName(),
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      password
    );
  }
}