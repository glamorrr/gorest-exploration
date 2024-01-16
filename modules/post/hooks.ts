import { UseQueryResult, useQuery } from 'react-query';
import { getPost, getPosts } from './api';
import { Post } from './enitities';
import { PaginateParams } from '../common/types';

export const useGetPosts = (params: PaginateParams): UseQueryResult<Post[]> => {
  return useQuery(['posts', params], () => getPosts(params));
};

export const useGetPost = (id: number): UseQueryResult<Post> => {
  return useQuery(['post', id], () => getPost(id));
};
