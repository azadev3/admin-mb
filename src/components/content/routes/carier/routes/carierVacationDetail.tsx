import { lazy } from 'react';

const CarierVacationsDetailShow = lazy(
  () =>
    import('../../../components/carier/vacations/vacation-detail/VacationsDetailShow'),
);
const CarierVacationsDetailCreate = lazy(
  () =>
    import('../../../components/carier/vacations/vacation-detail/VacationsDetailCreate'),
);
const CarierVacationsDetailEdit = lazy(
  () =>
    import('../../../components/carier/vacations/vacation-detail/VacationsDetailEdit'),
);

export const CarierVacationsDetail = [
  {
    id: 'carier-vacations-show',
    route: '/carier/vacations/vacation/detail',
    component: <CarierVacationsDetailShow />,
  },
  {
    id: 'carier-vacations-create',
    route: '/carier/vacations/vacation/detail/create',
    component: <CarierVacationsDetailCreate />,
  },
  {
    id: 'carier-vacations-edit',
    route: '/carier/vacations/vacation/detail/edit/:id',
    component: <CarierVacationsDetailEdit />,
  },
];
