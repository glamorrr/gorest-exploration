import { fetcher } from '@/utils/fetcher';
import { Post } from './enitities';
import { PaginateParams } from '../common/types';
import { config } from '@/config/index';

export const getPosts = async ({ page = 1 }: PaginateParams): Promise<Post[] | null> => {
  if (Number.isNaN(page)) return null;
  const res = await fetcher.get<Post[]>('/posts', {
    params: {
      page,
      perPage: config.blogsLimit,
    },
  });
  return res.data;
};

export const getPost = async (id: number): Promise<Post | null> => {
  if (Number.isNaN(id)) return null;
  const res = await fetcher.get<Post>(`/posts/${id}`);
  return res.data;
};
