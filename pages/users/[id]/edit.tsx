import Typography from '@mui/material/Typography';
import { DefaultLayout } from '@/layouts/index';
import { Page } from '@/components/page';
import { UserEdit } from '@/sections/user';

UserEditPage.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default function UserEditPage() {
  return (
    <Page title="Edit User">
      <Typography variant="h4" component="h1" fontWeight="600" gutterBottom>
        Edit User
      </Typography>
      <UserEdit />
    </Page>
  );
}
