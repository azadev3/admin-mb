import { lazy } from 'react';

const SecurityTypeShow = lazy(
  () => import('../../../components/meas/security-type/SecurityTypeShow'),
);
const SecurityTypeCreate = lazy(
  () => import('../../../components/meas/security-type/SecurityTypeCreate'),
);
const SecurityTypeEdit = lazy(
  () => import('../../../components/meas/security-type/SecurityTypeEdit'),
);

export const SecurityType = [
  {
    id: 'measinfo-show',
    route: '/meas/security-type',
    component: <SecurityTypeShow />,
  },
  {
    id: 'measinfo-create',
    route: '/meas/security-type/create',
    component: <SecurityTypeCreate />,
  },
  {
    id: 'measinfo-edit',
    route: '/meas/security-type/edit/:id',
    component: <SecurityTypeEdit />,
  },
];
