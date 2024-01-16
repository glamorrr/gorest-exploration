import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useGetPost } from '@/modules/post/hooks';
import { BlogContent, SkeletonBlogContent } from '@/components/blog';
import { Post } from '@/modules/post/enitities';

export default function BlogDetail() {
  const router = useRouter();
  const id = Number(router.query.id);
  let { data: post, isLoading, isError } = useGetPost(id);

  if (isError) {
    return <Typography>Oops something went wrong. Please try again later.</Typography>;
  }

  if (isLoading) {
    return <SkeletonBlogContent />;
  }

  post = post as Post;

  return <BlogContent {...post} />;
}
