import { lazy } from 'react';

const MeasIssuerTypeShow = lazy(
  () => import('../../../components/meas/issuer-type/IssuerTypeShow'),
);
const MeasIssuerTypeCreate = lazy(
  () => import('../../../components/meas/issuer-type/IssuerTypeCreate'),
);
const MeasIssuerTypeEdit = lazy(
  () => import('../../../components/meas/issuer-type/IssuerTypeEdit'),
);

export const MeasIssuerType = [
  {
    id: 'measinfo-show',
    route: '/meas/issuer-type',
    component: <MeasIssuerTypeShow />,
  },
  {
    id: 'measinfo-create',
    route: '/meas/issuer-type/create',
    component: <MeasIssuerTypeCreate />,
  },
  {
    id: 'measinfo-edit',
    route: '/meas/issuer-type/edit/:id',
    component: <MeasIssuerTypeEdit />,
  },
];
