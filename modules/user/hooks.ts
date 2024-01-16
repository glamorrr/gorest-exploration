import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { getUsers, getUser, deleteUser, updateUser, createUser } from './api';
import { CreateUser, Params, UpdateUser, User } from './enitities';

export const useGetUsers = (params: Params): UseQueryResult<User[]> => {
  return useQuery(['users', params], () => getUsers(params));
};

export const useGetUser = (id: number): UseQueryResult<User> => {
  return useQuery(['user', id], () => getUser(id));
};

export const useCreateUser = (): UseMutationResult<User, null, CreateUser> => {
  return useMutation({
    mutationFn: (user: CreateUser) => createUser(user),
  });
};

export const useUpdateUser = (): UseMutationResult<User, null, UpdateUser> => {
  return useMutation({
    mutationFn: (user: UpdateUser) => updateUser(user),
  });
};

export const useDeleteUser = (): UseMutationResult<null, unknown, number> => {
  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
  });
};
