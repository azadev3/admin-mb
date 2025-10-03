import { lazy } from 'react';

const YieldParametersCreate = lazy(
  () => import('../components/yield-parameter/YieldParameterCreate'),
);
const YieldParametersEdit = lazy(
  () => import('../components/yield-parameter/YieldParameterEdit'),
);
const YieldParametersShow = lazy(
  () => import('../components/yield-parameter/YieldParameterShow'),
);

export const YieldParametersRoutes = [
  {
    id: 'YieldParameters-show',
    route: '/gelirlilik-parametrleri',
    component: <YieldParametersShow />,
  },
  {
    id: 'YieldParameters-create',
    route: '/gelirlilik-parametrleri/create',
    component: <YieldParametersCreate />,
  },
  {
    id: 'YieldParameters-edit',
    route: '/gelirlilik-parametrleri/edit/:id',
    component: <YieldParametersEdit />,
  },
];
