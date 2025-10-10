import { lazy } from 'react';

const StatisticalBulletinShow = lazy(
  () =>
    import('../../../components/nakhcivan/statistical-bulletin/StatisticalBulletinShow'),
);
const StatisticalBulletinCreate = lazy(
  () =>
    import(
      '../../../components/nakhcivan/statistical-bulletin/StatisticalBulletinCreate'
    ),
);
const StatisticalBulletinEdit = lazy(
  () =>
    import('../../../components/nakhcivan/statistical-bulletin/StatisticalBulletinEdit'),
);

export const StatisticalBulletin = [
  {
    id: 'carier-bulletin-show',
    route: '/nakhcivan/statistical-bulletin',
    component: <StatisticalBulletinShow />,
  },
  {
    id: 'carier-bulletin-create',
    route: '/nakhcivan/statistical-bulletin/create',
    component: <StatisticalBulletinCreate />,
  },
  {
    id: 'carier-bulletin-edit',
    route: '/nakhcivan/statistical-bulletin/edit/:id',
    component: <StatisticalBulletinEdit />,
  },
];
