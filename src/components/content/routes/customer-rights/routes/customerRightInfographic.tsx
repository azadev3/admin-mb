import { lazy } from 'react';

const InfographicShow = lazy(
  () => import('../../../components/customer-rights/infographic/InfographicShow'),
);
const InfographicCreate = lazy(
  () => import('../../../components/customer-rights/infographic/InfographicCreate'),
);

const InfographicEdit = lazy(
  () => import('../../../components/customer-rights/infographic/InfographicEdit'),
);

export const Infographic = [
  {
    id: 'customer-rights-Infographic-show',
    route: '/customer-rights/infographic',
    component: <InfographicShow />,
  },
  {
    id: 'customer-rights-Infographic-create',
    route: '/customer-rights/infographic/create',
    component: <InfographicCreate />,
  },
  {
    id: 'customer-rights-Infographic-create',
    route: '/customer-rights/infographic/edit/:id',
    component: <InfographicEdit />,
  },
];
