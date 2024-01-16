import { fetcher } from '@/utils/fetcher';
import { Comment } from './enitities';

export const getComments = async (postId: number): Promise<Comment[] | null> => {
  if (Number.isNaN(postId)) return null;
  const res = await fetcher.get<Comment[]>(`/posts/${postId}/comments`);
  return res.data;
};
