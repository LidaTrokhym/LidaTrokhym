import { faker } from '@faker-js/faker';

export class User {
    constructor(
      public firstname: string, 
      public lastname: string, 
      public username: string, 
      public useremail:string, 
      public userpassword: string,
      public user_role: string,
      public usage_reason: string
    ) {}

    static createUser(): User {
        const password = faker.internet.password(); 
        const roles = [
            'Software Developer', 
            'Development Team Lead', 
            'DevOps Engineer', 
            'Systems Administrator', 
            'Security Analyst', 
            'Data Analyst', 
            'Product Manager', 
            'Product Designer', 
            'Other'
        ]
        const reasons = [
            'I want to learn the basics of Git', 
            'I want to move my repository to GitLab from somewhere else', 
            'I want to explore GitLab to see if it’s worth switching to', 
            'I want to store my code', 
            'I want to use GitLab CI with my existing repository', 
            'A different reason'
        ]

        return new User(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.username(),
            faker.internet.email(),
            password, 
            faker.helpers.arrayElement(roles),  
            faker.helpers.arrayElement(reasons)
        );
    }
}