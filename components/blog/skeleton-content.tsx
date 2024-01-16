import { Skeleton } from '@mui/material';

export default function SkeletonBlogContent() {
  return (
    <>
      <Skeleton variant="text" sx={{ fontSize: '16px' }} width="35%" />

      <Skeleton variant="text" sx={{ fontSize: '34px', mt: '4px' }} />
      <Skeleton variant="text" sx={{ fontSize: '34px' }} width="42%" />

      <Skeleton variant="text" sx={{ fontSize: '16px', mt: '16px' }} />
      <Skeleton variant="text" sx={{ fontSize: '16px' }} />
      <Skeleton variant="text" sx={{ fontSize: '16px' }} />
      <Skeleton variant="text" sx={{ fontSize: '16px' }} />
      <Skeleton variant="text" sx={{ fontSize: '16px' }} width="80%" />
    </>
  );
}
