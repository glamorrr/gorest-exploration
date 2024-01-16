import { useGetUsers } from '@/modules/user/hooks';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { UserCard } from '@/components/user';
import { config } from '@/config/index';
import { SkeletonUserCard } from '@/components/user';

export default function UserList() {
  const router = useRouter();
  const page = Number(router.query.page);
  const { name = '', status = '' } = router.query;
  let {
    data: users,
    isFetching,
    isError,
  } = useGetUsers({
    page,
    name: name as string,
    status: status as string,
  });

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
        {Array(config.usersLimit)
          .fill(null)
          .map((_, i) => (
            <SkeletonUserCard key={i} />
          ))}
      </Stack>
    );
  }

  return (
    <Stack spacing="12px" mt="24px">
      {users?.map((user) => (
        <UserCard key={user.id} href={`/users/${user.id}`} {...user} />
      ))}
    </Stack>
  );
}
