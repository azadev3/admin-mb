import { lazy } from 'react';

const IndexIncreasingCreate = lazy(
  () =>
    import(
      '../../../../content/components/market/index-increasing/IndexIncreasingCreate'
    ),
);
const IndexIncreasingShow = lazy(
  () =>
    import('../../../../content/components/market/index-increasing/IndexIncreasingShow'),
);

const IndexIncreasingEdit = lazy(
  () =>
    import('../../../../content/components/market/index-increasing/IndexIncreasingEdit'),
);

export const IndexIncreasingsRoutes = [
  {
    id: 'IndexIncreasing-show',
    route: '/index-increasing',
    component: <IndexIncreasingShow />,
  },
  {
    id: 'IndexIncreasing-create',
    route: '/index-increasing/create',
    component: <IndexIncreasingCreate />,
  },
  {
    id: 'IndexIncreasing-edit',
    route: '/index-increasing/edit/:id',
    component: <IndexIncreasingEdit />,
  },
];
