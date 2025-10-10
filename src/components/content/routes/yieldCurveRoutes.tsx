import { lazy } from 'react';

const YieldCurveCreate = lazy(
  () => import('../components/yield-curves/YieldCurveCreate'),
);
const YieldCurveEdit = lazy(() => import('../components/yield-curves/YieldCurveEdit'));
const YieldCurveShow = lazy(() => import('../components/yield-curves/YieldCurveShow'));

export const YieldCurveRoutes = [
  { id: 'YieldCurve-show', route: '/gelirlilik-eyrisi', component: <YieldCurveShow /> },
  {
    id: 'YieldCurve-create',
    route: '/gelirlilik-eyrisi/create',
    component: <YieldCurveCreate />,
  },
  {
    id: 'YieldCurve-edit',
    route: '/gelirlilik-eyrisi/edit/:id',
    component: <YieldCurveEdit />,
  },
];
