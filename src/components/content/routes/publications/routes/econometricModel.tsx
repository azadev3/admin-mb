import { lazy } from 'react';

const EconometricModelShow = lazy(
  () => import('../../../components/publications/econometric-model/EconometricModelShow'),
);
const EconometricModelCreate = lazy(
  () =>
    import('../../../components/publications/econometric-model/EconometricModelCreate'),
);

export const EconometricModel = [
  {
    id: 'EconometricModel-show',
    route: '/publications/EconometricModel',
    component: <EconometricModelShow />,
  },
  {
    id: 'EconometricModel-create',
    route: '/publications/EconometricModel/create',
    component: <EconometricModelCreate />,
  },
];
