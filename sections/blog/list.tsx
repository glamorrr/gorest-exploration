import Typography from '@mui/material/Typography';
import { useGetPosts } from '@/modules/post/hooks';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import { BlogCard, SkeletonBlogCard } from '@/components/blog';
import { config } from '@/config/index';

export default function BlogList() {
  const router = useRouter();
  const page = router.query.page ? Number(router.query.page) : 1;
  const { data: posts, isFetching, isError } = useGetPosts({ page });

  if (isError) {
    return (
      <Stack alignItems="center" mt={4}>
        <Typography>Oops something went wrong. Please try again later.</Typography>
      </Stack>
    );
  }

  if (isFetching) {
    return (
      <Stack spacing="16px" mt="24px">
        {Array(config.blogsLimit)
          .fill(null)
          .map((_, i) => (
            <SkeletonBlogCard key={i} />
          ))}
      </Stack>
    );
  }

  return (
    <Stack spacing="16px" mt="24px">
      {posts?.map((post) => (
        <BlogCard key={post.id} href={`/blogs/${post.id}`} {...post} />
      ))}
    </Stack>
  );
}
