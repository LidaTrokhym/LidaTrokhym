import { test, expect, APIRequestContext } from '@playwright/test';
import { User } from '../helpers/UserModelApi';  
test.describe('GitLab User API Registration', () => {

    test('Create new user via GitLab API', async ({ request }) => {
        const user = User.createUser(); 
        const response = await request.post('https://gitlab.testautomate.me/api/v4/users', {
        data: {
          email: user.email,
          username: user.username,
          name: user.name,
          password: user.password,
          skip_confirmation: true,
        },
        headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer FKzy_BpV5wAybKf7Z9JX'
    }
      });

      expect(response.status()).toBe(201);
      const createdUserData = await response.json();
      expect(createdUserData).toHaveProperty('username', user.username);
    });
  });