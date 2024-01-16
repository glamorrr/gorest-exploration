const config = {
  apiURL: 'https://gorest.co.in/public/v2/',
  apiAccessToken: '7bd96e52a7ff061e3e19ecb1e1631b141b7427e3b937877058fdf05876f96a76',
  usersLimit: 10,
  blogsLimit: 5,
};

const STATUS_FILTER = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
];

const STATUS_OPTIONS = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
];

const GENDER_OPTIONS = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

export { config, STATUS_FILTER, STATUS_OPTIONS, GENDER_OPTIONS };
