import Typography from '@mui/material/Typography';
import { DefaultLayout } from '@/layouts/index';
import { Page } from '@/components/page';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BlogList, BlogPagination } from '@/sections/blog';

HomePage.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default function HomePage() {
  const router = useRouter();
  const page = Number(router.query.page);

  useEffect(() => {
    if (!router.isReady) return;

    if (Number.isNaN(page)) {
      router.replace({
        query: {
          page: '1',
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
