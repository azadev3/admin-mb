import { lazy } from 'react';

const CarierVolunteersShow = lazy(
  () => import('../../../components/carier/internships/volunteer/VolunteerShow'),
);
const CarierVolunteersCreate = lazy(
  () => import('../../../components/carier/internships/volunteer/VolunteerCreate'),
);
const CarierVolunteersEdit = lazy(
  () => import('../../../components/carier/internships/volunteer/VolunteerEdit'),
);

export const CarierVolunteers = [
  {
    id: 'carier-intern-volunteer-show',
    route: '/carier/intern/volunteer',
    component: <CarierVolunteersShow />,
  },
  {
    id: 'carier-intern-volunteer-create',
    route: '/carier/intern/volunteer/create',
    component: <CarierVolunteersCreate />,
  },
  {
    id: 'carier-intern-volunteer-edit',
    route: '/carier/intern/volunteer/edit/:id',
    component: <CarierVolunteersEdit />,
  },
];
