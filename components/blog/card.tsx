import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import NextLink from 'next/link';

type Props = {
  userId: number;
  title: string;
  body: string;
  href: string;
};

export default function BlogCard({ userId, title, body, href }: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post by User {userId}
        </Typography>
        <Typography variant="h6" fontWeight="bold" component="h2">
          {title}
        </Typography>
        <Typography
          mt="8px"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <NextLink passHref href={href}>
          <Button variant="contained">Read More</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
}
