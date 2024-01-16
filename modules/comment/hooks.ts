import { UseQueryResult, useQuery } from 'react-query';
import { getComments } from './api';
import { Comment } from './enitities';

export const useGetComments = (postId: number): UseQueryResult<Comment[]> => {
  return useQuery(['comments', postId], () => getComments(postId));
};
