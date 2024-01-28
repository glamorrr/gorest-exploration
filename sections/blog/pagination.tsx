import { useRouter } from 'next/router';
import { Button, Stack } from '@mui/material';
import { Iconify } from '@/components/iconify';

export default function BlogPagination() {
  const router = useRouter();
  const page = router.query.page ? Number(router.query.page) : 1;

  const nextPage = () => {
    router.push({
      query: {
        page: String(page + 1),
      },
    });
  };

  const prevPage = () => {
    const prevPage = page - 1;
    router.push({
      query: {
        ...(prevPage !== 1 && { page: String(prevPage) }),
      },
    });
  };

  return (
    <Stack direction="row" spacing="16px" justifyContent="center" mt="16px">
      <Button
        disabled={page === 1}
        variant="outlined"
        startIcon={<Iconify icon="ic:baseline-chevron-left" />}
        onClick={prevPage}
      >
        Previous
      </Button>
      <Button component="div" variant="outlined" sx={{ pointerEvents: 'none', minWidth: '36px' }}>
        {page}
      </Button>
      <Button
        variant="outlined"
        endIcon={<Iconify icon="ic:baseline-chevron-right" />}
        onClick={nextPage}
        disabled={page === 10}
      >
        Next
      </Button>
    </Stack>
  );
}
