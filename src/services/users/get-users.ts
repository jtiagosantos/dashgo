interface GetUsersResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface Users {
  users: Array<GetUsersResponse>;
}

export async function getUsersService(): Promise<Array<GetUsersResponse>> {
  const response = await fetch('http://localhost:3000/api/users');
  const data = (await response.json()) as Users;

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
