import Typography from '@mui/material/Typography';
import { DefaultLayout } from '@/layouts/index';
import { Page } from '@/components/page';
import { UserCreate } from '@/sections/user';

UserCreatePage.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default function UserCreatePage() {
  return (
    <Page title="Create User">
      <Typography variant="h4" component="h1" fontWeight="600" gutterBottom>
        Create User
      </Typography>
      <UserCreate />
    </Page>
  );
}
