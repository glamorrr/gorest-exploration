import { Card, CardContent, Skeleton, Stack } from '@mui/material';

export default function SkeletonCommentCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" spacing="8px" alignItems="center">
          <Skeleton variant="circular" width={28} height={28} />
          <Skeleton variant="text" sx={{ fontSize: '16px' }} width="20%" />
        </Stack>
        <Skeleton variant="text" sx={{ fontSize: '16px', mt: '8px' }} />
        <Skeleton variant="text" sx={{ fontSize: '16px' }} />
      </CardContent>
    </Card>
  );
}
