import Typography from '@mui/material/Typography';
import { Avatar, Card, CardContent, IconButton, Stack } from '@mui/material';
import { stringAvatar } from '@/utils/stringAvatar';
import { Iconify } from '../iconify';
import UserStatusLabel from './status';
import NextLink from 'next/link';

type Props = {
  name: string;
  email: string;
  gender: string;
  status: string;
  href: string;
};

export default function UserCard({ name, status, href }: Props) {
  const avatar = stringAvatar(name);

  return (
    <Card variant="outlined">
      <CardContent sx={{ py: '12px !important', px: '10px' }}>
        <Stack direction="row" spacing="24px" justifyContent="space-between">
          <Stack direction="row" spacing="10px" alignItems="center">
            <Avatar sx={{ width: 28, height: 28, fontSize: '13px', ...avatar.sx }}>
              {avatar.children}
            </Avatar>
            <Typography fontWeight="500">{name}</Typography>
          </Stack>
          <Stack direction="row" spacing="8px" alignItems="center">
            <UserStatusLabel status={status} />
            <NextLink passHref href={href}>
              <IconButton aria-label="view">
                <Iconify icon="ic:baseline-remove-red-eye" />
              </IconButton>
            </NextLink>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
