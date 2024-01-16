import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GENDER_OPTIONS, STATUS_OPTIONS } from '@/config/index';
import { Iconify } from '@/components/iconify';
import NextLink from 'next/link';
import { useGetUser, useUpdateUser } from '@/modules/user/hooks';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useMemo } from 'react';

type FormValuesProps = {
  name: string;
  email: string;
  gender: string;
  status: string;
};

const UserEditSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  status: Yup.string().required('Status is required'),
});

export default function UserEdit() {
  const updateUser = useUpdateUser();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const id = Number(router.query.id);
  const { data: user } = useGetUser(id);
  const defaultValues = useMemo(
    () => ({
      name: user?.name || '',
      email: user?.email || '',
      gender: user?.gender || '',
      status: user?.status || '',
    }),
    [user]
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesProps>({
    resolver: yupResolver(UserEditSchema),
    defaultValues,
  });

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const user = await updateUser.mutateAsync({ id, data });
      router.push('/users');
      enqueueSnackbar(`User "${user.name}" updated`, { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(`Update user failed. Please try again later.`, { variant: 'error' });
    }
  };

  return (
    <Stack spacing="40px" mt={6} component="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <InputLabel shrink htmlFor="name" sx={{ mt: -2, ml: -1.8 }}>
          Name
        </InputLabel>
        <OutlinedInput {...register('name')} placeholder="Name" size="small" id="name" />
        <FormHelperText error={!!errors.name}>{errors.name?.message}</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel shrink htmlFor="email" sx={{ mt: -2, ml: -1.8 }}>
          Email
        </InputLabel>
        <OutlinedInput {...register('email')} placeholder="Email" size="small" id="email" />
        <FormHelperText error={!!errors.email}>{errors.email?.message}</FormHelperText>
      </FormControl>
      <FormControl sx={{ mt: 4 }}>
        <InputLabel shrink id="gender" sx={{ mt: -2, ml: -1.8 }}>
          Gender
        </InputLabel>
        <Controller
          render={({ field }) => (
            <Select displayEmpty labelId="gender" size="small" {...field}>
              <MenuItem disabled value="">
                <em>Choose gender</em>
              </MenuItem>
              {GENDER_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          )}
          name="gender"
          control={control}
        />
        <FormHelperText error={!!errors.gender}>{errors.gender?.message}</FormHelperText>
      </FormControl>
      <FormControl sx={{ mt: 4 }}>
        <InputLabel shrink id="status" sx={{ mt: -2, ml: -1.8 }}>
          Status
        </InputLabel>
        <Controller
          render={({ field }) => (
            <Select displayEmpty labelId="status" size="small" {...field}>
              <MenuItem disabled value="">
                <em>Choose status</em>
              </MenuItem>
              {STATUS_OPTIONS.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          )}
          name="status"
          control={control}
        />
        <FormHelperText error={!!errors.status}>{errors.status?.message}</FormHelperText>
      </FormControl>
      <Stack direction="row" justifyContent="flex-end" spacing="16px">
        <NextLink passHref href="/users">
          <Button variant="outlined">Cancel</Button>
        </NextLink>
        <Button
          disabled={updateUser.isLoading}
          type="submit"
          variant="contained"
          startIcon={<Iconify icon="ic:baseline-save" />}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
