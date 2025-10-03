import { lazy } from 'react';

const MeasAboutShow = lazy(
  () => import('../../../components/meas/meas-about/MeasAboutShow'),
);
const MeasAboutCreate = lazy(
  () => import('../../../components/meas/meas-about/MeasAboutCreate'),
);

export const MeasAbout = [
  {
    id: 'measabout-show',
    route: '/meas/about',
    component: <MeasAboutShow />,
  },
  {
    id: 'measabout-create',
    route: '/meas/about/create',
    component: <MeasAboutCreate />,
  },
];
