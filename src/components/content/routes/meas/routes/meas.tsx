import { lazy } from 'react';

const MeasShow = lazy(() => import('../../../components/meas/meas/MeasShow'));
const MeasCreate = lazy(() => import('../../../components/meas/meas/MeasCreate'));
const MeasEdit = lazy(() => import('../../../components/meas/meas/MeasEdit'));

export const Meas = [
  {
    id: 'meas-show',
    route: '/meas/MEAS',
    component: <MeasShow />,
  },
  {
    id: 'meas-create',
    route: '/meas/MEAS/create',
    component: <MeasCreate />,
  },
  {
    id: 'meas-edit',
    route: '/meas/MEAS/edit/:id',
    component: <MeasEdit />,
  },
];
