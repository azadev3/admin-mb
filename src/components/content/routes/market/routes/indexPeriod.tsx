import { lazy } from 'react';

const IndexPeriodCreate = lazy(
  () => import('../../../../content/components/market/index-period/IndexPeriodCreate'),
);
const IndexPeriodShow = lazy(
  () => import('../../../../content/components/market/index-period/IndexPeriodShow'),
);

const IndexPeriodEdit = lazy(
  () => import('../../../../content/components/market/index-period/IndexPeriodEdit'),
);

export const IndexPeriodsRoutes = [
  {
    id: 'IndexPeriod-show',
    route: '/index-period',
    component: <IndexPeriodShow />,
  },
  {
    id: 'IndexPeriod-create',
    route: '/index-period/create',
    component: <IndexPeriodCreate />,
  },
  {
    id: 'IndexPeriod-edit',
    route: '/index-period/edit/:id',
    component: <IndexPeriodEdit />,
  },
];
