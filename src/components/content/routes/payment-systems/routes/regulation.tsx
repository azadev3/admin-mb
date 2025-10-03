import { lazy } from 'react';

const RegulationShow = lazy(
  () => import('../../../components/payment-systems/regulation/RegulationShow'),
);
const RegulationCreate = lazy(
  () => import('../../../components/payment-systems/regulation/RegulationCreate'),
);
const RegulationEdit = lazy(
  () => import('../../../components/payment-systems/regulation/RegulationEdit'),
);

export const Regulation = [
  {
    id: 'Regulation-show',
    route: '/payment-systems/Regulation',
    component: <RegulationShow />,
  },
  {
    id: 'Regulation-create',
    route: '/payment-systems/Regulation/create',
    component: <RegulationCreate />,
  },
  {
    id: 'Regulation-create',
    route: '/payment-systems/Regulation/edit/:id',
    component: <RegulationEdit />,
  },
];
