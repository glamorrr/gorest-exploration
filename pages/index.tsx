import Typography from '@mui/material/Typography';
import { DefaultLayout } from '@/layouts/index';
import { Page } from '@/components/page';
import { BlogList, BlogPagination } from '@/sections/blog';

HomePage.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default function HomePage() {
  return (
    <Page title="Home">
      <Typography variant="h4" component="h1" fontWeight="600" gutterBottom>
        Blogs
      </Typography>
      <BlogList />
      <BlogPagination />
    </Page>
  );
}
