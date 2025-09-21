import { lazy } from 'react';

const CarierVacationsShow = lazy(
  () => import('../../../components/carier/vacations/VacationsShow'),
);
const CarierVacationsCreate = lazy(
  () => import('../../../components/carier/vacations/VacationsCreate'),
);
const CarierVacationsEdit = lazy(
  () => import('../../../components/carier/vacations/VacationsEdit'),
);

export const CarierVacations = [
  {
    id: 'carier-vacations-show',
    route: '/carier/vacations/vacation',
    component: <CarierVacationsShow />,
  },
  {
    id: 'carier-vacations-create',
    route: '/carier/vacations/vacation/create',
    component: <CarierVacationsCreate />,
  },
  {
    id: 'carier-vacations-edit',
    route: '/carier/vacations/vacation/edit/:id',
    component: <CarierVacationsEdit />,
  },
];
