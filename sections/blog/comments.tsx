import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useGetComments } from '@/modules/comment/hooks';
import { Stack } from '@mui/material';
import { CommentCard, SkeletonCommentCard } from '@/components/comment';

export default function BlogComments() {
  const router = useRouter();
  const id = Number(router.query.id);
  let { data: comments, isLoading, isError } = useGetComments(id);

  if (isError) {
    return (
      <>
        <Typography mt={4} variant="h6" component="h2" fontWeight="600" gutterBottom>
          Comments
        </Typography>
        <Typography mt={2} variant="body1" color="text.secondary" gutterBottom>
          Oops something went wrong. Please try again later.
        </Typography>
      </>
    );
  }

  if (isLoading) {
    return (
      <Stack mt={4} spacing="16px">
        <Typography variant="h6" component="h2" fontWeight="600" gutterBottom>
          Comments
        </Typography>
        {Array(2)
          .fill(null)
          .map((_, i) => (
            <SkeletonCommentCard key={i} />
          ))}
      </Stack>
    );
  }

  if (comments?.length === 0) {
    return (
      <>
        <Typography mt={4} variant="h6" component="h2" fontWeight="600" gutterBottom>
          Comments{' '}
          <Typography component="span" color="text.secondary">
            ({comments.length})
          </Typography>
        </Typography>
        <Typography mt={1} variant="body1" color="text.secondary" gutterBottom>
          There are no comments yet
        </Typography>
      </>
    );
  }

  return (
    <Stack mt={4} spacing="16px">
      <Typography variant="h6" component="h2" fontWeight="600" gutterBottom>
        Comments{' '}
        <Typography component="span" color="text.secondary">
          ({comments?.length})
        </Typography>
      </Typography>

      {comments?.map(({ id, name, body }) => {
        return <CommentCard key={id} name={name} body={body} />;
      })}
    </Stack>
  );
}
