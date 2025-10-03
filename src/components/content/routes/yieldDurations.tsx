import { lazy } from 'react';

const YieldDurationsCreate = lazy(
  () => import('../components/yield-durations/YieldDurationsCreate'),
);
const YieldDurationsEdit = lazy(
  () => import('../components/yield-durations/YieldDurationsEdit'),
);
const YieldDurationsShow = lazy(
  () => import('../components/yield-durations/YieldDurationsShow'),
);

export const YieldDurationsRoutes = [
  {
    id: 'YieldDurations-show',
    route: '/gelirlilik-muddetleri',
    component: <YieldDurationsShow />,
  },
  {
    id: 'YieldDurations-create',
    route: '/gelirlilik-muddetleri/create',
    component: <YieldDurationsCreate />,
  },
  {
    id: 'YieldDurations-edit',
    route: '/gelirlilik-muddetleri/edit/:id',
    component: <YieldDurationsEdit />,
  },
];
