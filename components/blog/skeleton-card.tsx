import { Card, CardActions, CardContent, Skeleton } from '@mui/material';

export default function SkeletonBlogCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: '14px' }} width="35%" />

        <Skeleton variant="text" sx={{ fontSize: '20px', mt: '4px' }} />
        <Skeleton variant="text" sx={{ fontSize: '20px' }} width="42%" />

        <Skeleton variant="text" sx={{ fontSize: '16px', mt: '8px' }} />
        <Skeleton variant="text" sx={{ fontSize: '16px' }} />
        <Skeleton variant="text" sx={{ fontSize: '16px' }} />
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Skeleton variant="rounded" width="113px" height="36px" />
      </CardActions>
    </Card>
  );
}
