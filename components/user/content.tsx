import Typography from '@mui/material/Typography';
import UserStatusLabel from './status';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from '@mui/material';
import { stringAvatar } from '@/utils/stringAvatar';
import { Iconify } from '../iconify';
import { useState } from 'react';
import { useDeleteUser } from '@/modules/user/hooks';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import NextLink from 'next/link';

type Props = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

export default function UserContent({ id, email, gender, status, name }: Props) {
  const [open, setOpen] = useState(false);
  const deleteUser = useDeleteUser();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const avatar = stringAvatar(name);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onDelete = async () => {
    try {
      await deleteUser.mutateAsync(id);
      router.push('/users');
      enqueueSnackbar(`User "${name}" deleted`, { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(`Delete failed. Please try again later.`, { variant: 'error' });
    }
  };

  return (
    <>
      <Stack direction="row" spacing="16px" alignItems="center">
        <Avatar sx={{ width: 48, height: 48, fontSize: '24px', ...avatar.sx }}>
          {avatar.children}
        </Avatar>
        <Typography variant="h5" component="h1" fontWeight="500">
          {name}
        </Typography>
      </Stack>
      <Typography
        mt={4}
        gutterBottom
        color="text.secondary"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '1',
          WebkitBoxOrient: 'vertical',
        }}
      >
        Email
      </Typography>
      <Typography>{email}</Typography>
      <Typography mt={2} gutterBottom color="text.secondary">
        Gender
      </Typography>
      <Typography textTransform="capitalize">{gender}</Typography>
      <Typography mt={2} gutterBottom color="text.secondary">
        Status
      </Typography>
      <UserStatusLabel status={status} />
      <Stack direction="row" spacing="16px" mt={6}>
        <NextLink passHref href={`/users/${id}/edit`}>
          <Button
            color="primary"
            variant="outlined"
            startIcon={<Iconify icon="ic:baseline-edit" />}
          >
            Edit
          </Button>
        </NextLink>
        <Button
          onClick={handleOpen}
          color="error"
          variant="outlined"
          startIcon={<Iconify icon="ic:baseline-delete" />}
        >
          Delete
        </Button>
      </Stack>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Order</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete order {name}?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus color="inherit">
            Cancel
          </Button>
          <Button
            startIcon={<Iconify icon="ic:baseline-delete" />}
            disabled={deleteUser.isLoading}
            color="error"
            variant="contained"
            onClick={onDelete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
