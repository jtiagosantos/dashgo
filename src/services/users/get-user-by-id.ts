import { User } from '../../types/user';
import { api } from '../axios/api';

export async function getUserByIdService(userId: string): Promise<User> {
  const { data } = await api.get(`users/${userId}`);

  return data;
}
