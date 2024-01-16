import Typography from '@mui/material/Typography';
import { Avatar, Card, CardContent, Stack } from '@mui/material';
import { stringAvatar } from '@/utils/stringAvatar';

type Props = {
  name: string;
  body: string;
};

export default function CommentCard({ name, body }: Props) {
  const avatar = stringAvatar(name);

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" spacing="8px" alignItems="center">
          <Avatar sx={{ width: 28, height: 28, fontSize: '13px', ...avatar.sx }}>
            {avatar.children}
          </Avatar>
          <Typography fontWeight="500">{name}</Typography>
        </Stack>
        <Typography mt="8px" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
