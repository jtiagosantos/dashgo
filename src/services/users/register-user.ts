import { CreateUserFormData } from '../../pages/users/create';
import { api } from '../axios/api';

type RegisterUserRequest = CreateUserFormData;

export async function registerUserService(user: RegisterUserRequest) {
  await api.post('users', {
    user: {
      ...user,
      created_at: new Date(),
    },
  });
}
