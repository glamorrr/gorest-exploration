import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { SkeletonUserContent, UserContent } from '@/components/user';
import { useGetUser } from '@/modules/user/hooks';
import { User } from '@/modules/user/enitities';

export default function UserDetail() {
  const router = useRouter();
  const id = Number(router.query.id);
  let { data: user, isLoading, isError } = useGetUser(id);

  if (isError) {
    return <Typography>Oops something went wrong. Please try again later.</Typography>;
  }

  if (isLoading) {
    return <SkeletonUserContent />;
  }

  user = user as User;

  return <UserContent {...user} />;
}
