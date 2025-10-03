import { lazy } from 'react';

const NominationShow = lazy(
  () => import('../../../components/payment-systems/nomination/NominationShow'),
);
const NominationCreate = lazy(
  () => import('../../../components/payment-systems/nomination/NominationCreate'),
);
const NominationEdit = lazy(
  () => import('../../../components/payment-systems/nomination/NominationEdit'),
);

export const Nomination = [
  {
    id: 'Nomination-show',
    route: '/payment-systems/Nomination',
    component: <NominationShow />,
  },
  {
    id: 'Nomination-create',
    route: '/payment-systems/Nomination/create',
    component: <NominationCreate />,
  },
  {
    id: 'Nomination-create',
    route: '/payment-systems/Nomination/edit/:id',
    component: <NominationEdit />,
  },
];
