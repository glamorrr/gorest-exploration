import { DefaultLayout } from '@/layouts/index';
import { Page } from '@/components/page';
import { UserDetail } from '@/sections/user';

UserDetailPage.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default function UserDetailPage() {
  return (
    <Page title="User">
      <UserDetail />
    </Page>
  );
}
