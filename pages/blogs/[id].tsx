import { DefaultLayout } from '@/layouts/index';
import { Page } from '@/components/page';
import { BlogComments, BlogDetail } from '@/sections/blog';

BlogPage.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default function BlogPage() {
  return (
    <Page title="Blog Post">
      <BlogDetail />
      <BlogComments />
    </Page>
  );
}
