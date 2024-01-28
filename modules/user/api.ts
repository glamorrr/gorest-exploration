import { fetcher } from '@/utils/fetcher';
import { CreateUser, Params, UpdateUser, User } from './enitities';
import { config } from '@/config/index';

export const getUsers = async ({ page = 1, name, status }: Params): Promise<User[]> => {
  const res = await fetcher.get<User[]>('/users', {
    params: {
      page,
      perPage: config.usersLimit,
      name,
      status,
    },
  });
  return res.data;
};

export const getUser = async (id: number): Promise<User> => {
  const res = await fetcher.get<User>(`/users/${id}`);
  return res.data;
};

export const createUser = async (user: CreateUser): Promise<User> => {
  const res = await fetcher.post<User>(`/users`, user);
  return res.data;
};

export const updateUser = async ({ id, data }: UpdateUser): Promise<User> => {
  const res = await fetcher.put<User>(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id: number): Promise<null> => {
  if (Number.isNaN(id)) return null;
  await fetcher.delete<User>(`/users/${id}`);
  return null;
};
