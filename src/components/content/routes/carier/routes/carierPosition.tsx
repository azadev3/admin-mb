import { lazy } from 'react';

const CarierPositionShow = lazy(
  () => import('../../../components/carier/position/PositionShow'),
);
const CarierPositionCreate = lazy(
  () => import('../../../components/carier/position/PositionCreate'),
);
const CarierPositionEdit = lazy(
  () => import('../../../components/carier/position/PositionEdit'),
);

export const CarierPosition = [
  {
    id: 'carier-position-show',
    route: '/carier/position',
    component: <CarierPositionShow />,
  },
  {
    id: 'carier-position-create',
    route: '/carier/position/create',
    component: <CarierPositionCreate />,
  },
  {
    id: 'carier-position-edit',
    route: '/carier/position/edit/:id',
    component: <CarierPositionEdit />,
  },
];
