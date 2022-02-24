import { api } from '../axios/api';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface GetUsersResponse {
  users: Array<User>;
  totalCount: number;
}

export async function getUsersService(
  currentPage: number,
): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page: currentPage,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return {
    users,
    totalCount,
  };
}
