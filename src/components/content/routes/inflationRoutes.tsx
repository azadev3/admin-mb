import { lazy } from 'react';

const InflationValuesCreate = lazy(
  () => import('../components/inflation/InflationValuesCreate'),
);
const InflationValuesEdit = lazy(
  () => import('../components/inflation/InflationValuesEdit'),
);
const InflationValuesShow = lazy(
  () => import('../components/inflation/InflationValuesShow'),
);

export const inflationRoutes = [
  {
    id: 'inflation-show',
    route: '/inflasiya',
    component: <InflationValuesShow />,
  },
  {
    id: 'inflation-create',
    route: '/inflasiya/create',
    component: <InflationValuesCreate />,
  },
  {
    id: 'inflation-edit',
    route: '/inflasiya/edit/:id',
    component: <InflationValuesEdit />,
  },
];
