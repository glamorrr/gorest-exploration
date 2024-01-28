import { useRouter } from 'next/router';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { STATUS_FILTER } from '@/config/index';

export default function UserFilter() {
  const router = useRouter();
  const [filterName, setFilterName] = useState(router.query.name);
  const selectedStatus = STATUS_FILTER.find(({ value }) => value === (router.query.status || ''));

  useEffect(() => {
    if (!router.isReady) return;
    setFilterName(router.query.name);
  }, [router.isReady, router.query.name]);

  const handleChangeStatus = (status: string) => {
    router.push({
      query: {
        name: filterName,
        status,
      },
    });
  };

  const handleChangeName = (name: string) => {
    setFilterName(name);
  };

  useEffect(() => {
    if (!router.isReady) return;
    if (filterName === router.query.name) return;

    const delay = setTimeout(() => {
      router.push({
        query: {
          ...(router.query.status && { status: router.query.status }),
          ...(filterName && { name: filterName }),
        },
      });
    }, 500);

    return () => clearTimeout(delay);
  }, [filterName, router]);

  return (
    <Stack
      sx={{ mt: 6 }}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: '40px', sm: '16px' }}
    >
      <FormControl>
        <InputLabel shrink htmlFor="search-name" sx={{ mt: -2, ml: -1.8 }}>
          Name
        </InputLabel>
        <OutlinedInput
          value={filterName}
          onChange={(e) => handleChangeName(e.target.value)}
          placeholder="Name"
          size="small"
          id="search-name"
        />
      </FormControl>
      <FormControl sx={{ mt: 4 }}>
        <InputLabel shrink id="search-status" sx={{ mt: -2, ml: -1.8 }}>
          Status
        </InputLabel>
        <Select
          displayEmpty
          labelId="search-status"
          value={selectedStatus?.value}
          size="small"
          sx={{ width: { xs: '100%', sm: '120px' } }}
          onChange={(e) => handleChangeStatus(e.target.value)}
        >
          {STATUS_FILTER.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
