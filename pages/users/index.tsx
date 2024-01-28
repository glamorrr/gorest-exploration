import Typography from '@mui/material/Typography';
import { DefaultLayout } from '@/layouts/index';
import { Page } from '@/components/page';
import { UserList, UserPagination, UserFilter } from '@/sections/user';
import { Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import NextLink from 'next/link';
import { Iconify } from '@/components/iconify';

UserListPage.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default function UserListPage() {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Page title="Users">
      <Typography variant="h4" component="h1" fontWeight="600" gutterBottom>
        Users
      </Typography>
      <Stack
        sx={{ mt: 4 }}
        direction={{ xs: 'column-reverse', sm: 'row' }}
        spacing={{ xs: '40px', md: '16px' }}
        justifyContent="space-between"
      >
        <UserFilter />
        <NextLink href="/users/create" passHref>
          <Button
            startIcon={<Iconify icon="ic:baseline-add" />}
            fullWidth={smUp ? false : true}
            variant="contained"
          >
            Create
          </Button>
        </NextLink>
      </Stack>
      <UserList />
      <UserPagination />
    </Page>
  );
}
