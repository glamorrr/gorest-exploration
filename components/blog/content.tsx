import Typography from '@mui/material/Typography';

type Props = {
  userId: number;
  title: string;
  body: string;
};

export default function BlogContent({ userId, title, body }: Props) {
  return (
    <>
      <Typography color="text.secondary" gutterBottom>
        Post by User {userId}
      </Typography>
      <Typography variant="h4" component="h1" fontWeight="600" gutterBottom>
        {title}
      </Typography>
      <Typography mt={2} gutterBottom color="text.secondary">
        {body}
      </Typography>
    </>
  );
}
