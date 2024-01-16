import Typography from '@mui/material/Typography';
import { Box, Chip, Stack } from '@mui/material';
import { green, grey } from '@mui/material/colors';

type Props = {
  status: string;
};

export default function UserStatusLabel({ status }: Props) {
  const isActive = status === 'active';
  const bg = isActive ? green[50] : grey[100];
  const color = isActive ? green[800] : grey[800];

  return (
    <Chip
      label={
        <Stack direction="row" alignItems="center" spacing="6px">
          <Box width={6} height={6} bgcolor={color} borderRadius="50%" />
          <Typography fontSize="12px" fontWeight="500">
            {status}
          </Typography>
        </Stack>
      }
      size="small"
      sx={{
        background: bg,
        color,
        textTransform: 'capitalize',
      }}
    />
  );
}
