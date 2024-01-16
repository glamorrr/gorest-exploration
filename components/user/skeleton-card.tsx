import { Card, CardContent, Skeleton, Stack } from '@mui/material';

export default function SkeletonUserCard() {
  return (
    <Card variant="outlined">
      <CardContent sx={{ py: '12px !important', px: '10px' }}>
        <Stack direction="row" spacing="24px" justifyContent="space-between">
          <Stack direction="row" spacing="10px" alignItems="center">
            <Skeleton variant="circular" width={28} height={28} />
            <Skeleton variant="text" sx={{ fontSize: '16px', width: '100px' }} />
          </Stack>
          <Stack direction="row" spacing="8px" alignItems="center">
            <Skeleton variant="rounded" sx={{ borderRadius: '100px' }} width="64px" height="18px" />
            <Skeleton variant="circular" width={36} height={36} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
