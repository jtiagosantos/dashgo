import { api } from '../axios/api';

interface GetUsersResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export async function getUsersService(): Promise<Array<GetUsersResponse>> {
  const { data } = await api.get('users');

  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return users;
}
