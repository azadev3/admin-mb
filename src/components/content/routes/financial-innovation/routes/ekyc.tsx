import { lazy } from 'react';

const EKYCShow = lazy(
  () => import('../../../components/financal-innovation/ekyc/EKYCShow'),
);
const EKYCCreate = lazy(
  () => import('../../../components/financal-innovation/ekyc/EKYCCreate'),
);

export const Ekyc = [
  {
    id: 'EKYC-show',
    route: '/financial-innovation/EKYC',
    component: <EKYCShow />,
  },
  {
    id: 'EKYC-create',
    route: '/financial-innovation/EKYC/create',
    component: <EKYCCreate />,
  },
];
