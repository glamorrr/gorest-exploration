import { useRouter } from 'next/router';
import { useGetUsers } from '@/modules/user/hooks';
import { Button, Stack } from '@mui/material';
import { Iconify } from '@/components/iconify';

export default function UserPagination() {
  const router = useRouter();
  const { name, status } = router.query;
  const page = Number(router.query.page);
  let { data: users } = useGetUsers({
    page,
    name: name as string,
    status: status as string,
  });

  const nextPage = () => {
    router.push({
      query: {
        ...router.query,
        page: String(page + 1),
      },
    });
  };

  const prevPage = () => {
    router.push({
      query: {
        ...router.query,
        page: String(page - 1),
      },
    });
  };

  if (Number.isNaN(page)) return <></>;

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
        disabled={users?.length ? users?.length < 10 : true}
      >
        Next
      </Button>
    </Stack>
  );
}
