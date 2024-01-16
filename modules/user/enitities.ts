import { PaginateParams } from '../common/types';

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface CreateUser {
  name: string;
  email: string;
  gender: string;
  status: string;
}

export type UpdateUser = {
  id: number;
  data: CreateUser;
};

export type Params = {
  name: string;
  status: string;
} & PaginateParams;
