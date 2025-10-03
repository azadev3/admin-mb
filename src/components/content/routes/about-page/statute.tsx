import { lazy } from 'react';

const StatuteCreate = lazy(
  () => import('../../../content/components/about-page/statute/StatuteCreate'),
);
const StatuteEdit = lazy(
  () => import('../../../content/components/about-page/statute/StatuteEdit'),
);
const StatuteShow = lazy(
  () => import('../../../content/components/about-page/statute/StatuteShow'),
);

export const Statute = [
  {
    id: 'Statute-show',
    route: '/statute',
    component: <StatuteShow />,
  },
  {
    id: 'Statute-create',
    route: '/statute/create',
    component: <StatuteCreate />,
  },
  {
    id: 'Statute-edit',
    route: '/statute/edit/:id',
    component: <StatuteEdit />,
  },
];
