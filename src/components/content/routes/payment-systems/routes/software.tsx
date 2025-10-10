import { lazy } from 'react';

const SoftwareShow = lazy(
  () => import('../../../components/payment-systems/software/SoftwareShow'),
);
const SoftwareCreate = lazy(
  () => import('../../../components/payment-systems/software/SoftwareCreate'),
);
const SoftwareEdit = lazy(
  () => import('../../../components/payment-systems/software/SoftwareEdit'),
);

export const Software = [
  {
    id: 'Software-show',
    route: '/payment-systems/Software',
    component: <SoftwareShow />,
  },
  {
    id: 'Software-create',
    route: '/payment-systems/Software/create',
    component: <SoftwareCreate />,
  },
  {
    id: 'Software-create',
    route: '/payment-systems/Software/edit/:id',
    component: <SoftwareEdit />,
  },
];
