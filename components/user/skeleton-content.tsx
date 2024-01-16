import { Skeleton, Stack } from '@mui/material';

export default function SkeletonUserContent() {
  return (
    <>
      <Stack direction="row" spacing="16px" alignItems="center">
        <Skeleton variant="circular" width={48} height={48} />
        <Skeleton variant="text" sx={{ fontSize: '24px', width: '160px' }} />
      </Stack>
      <Skeleton variant="text" sx={{ fontSize: '16px', mt: 4 }} width="40px" />
      <Skeleton variant="text" sx={{ fontSize: '16px', width: '140px' }} />
      <Skeleton variant="text" sx={{ fontSize: '16px', mt: 4 }} width="60px" />
      <Skeleton variant="text" sx={{ fontSize: '16px', width: '50px' }} />
      <Skeleton variant="text" sx={{ fontSize: '16px', mt: 4 }} width="55px" />
      <Skeleton variant="rounded" sx={{ borderRadius: '100px' }} width="64px" height="18px" />
      <Stack direction="row" spacing="16px" mt={6}>
        <Skeleton variant="rounded" width="88px" height="36px" />
        <Skeleton variant="rounded" width="108px" height="36px" />
      </Stack>
    </>
  );
}
