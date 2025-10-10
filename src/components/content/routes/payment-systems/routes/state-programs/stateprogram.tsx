import { lazy } from 'react';

const StateProgramShow = lazy(
  () => import('../../../../components/payment-systems/state-programs/StateProgramShow'),
);
const StateProgramCreate = lazy(
  () =>
    import('../../../../components/payment-systems/state-programs/StateProgramCreate'),
);
const StateProgramEdit = lazy(
  () => import('../../../../components/payment-systems/state-programs/StateProgramEdit'),
);

export const StateProgram = [
  {
    id: 'StateProgram-show',
    route: '/payment-systems/state-programs/StateProgram',
    component: <StateProgramShow />,
  },
  {
    id: 'StateProgram-create',
    route: '/payment-systems/state-programs/StateProgram/create',
    component: <StateProgramCreate />,
  },
  {
    id: 'StateProgram-create',
    route: '/payment-systems/state-programs/StateProgram/edit/:id',
    component: <StateProgramEdit />,
  },
];
