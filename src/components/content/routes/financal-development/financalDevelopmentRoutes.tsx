import { lazy } from 'react';

const FinancalDevelopmentCreate = lazy(
  () => import('../../components/financal-development/FinancalDevelopmentCreate'),
);
const FinancalDevelopmentShow = lazy(
  () => import('../../components/financal-development/FinancalDevelopmentShow'),
);

export const financalDevelopmentRoutes = [
  {
    id: 'fd-show',
    route: '/financal-development',
    component: <FinancalDevelopmentShow />,
  },
  {
    id: 'fd-create',
    route: '/financal-development/create',
    component: <FinancalDevelopmentCreate />,
  },
];
