import { lazy } from 'react';

const InternationalCooperationInitiativeShow = lazy(
  () =>
    import(
      '../../../components/international-cooperation/initiative/InternationalCooperationInitiativeShow'
    ),
);
const InternationalCooperationInitiativeCreate = lazy(
  () =>
    import(
      '../../../components/international-cooperation/initiative/InternationalCooperationInitiativeCreate'
    ),
);
const InternationalCooperationInitiativeEdit = lazy(
  () =>
    import(
      '../../../components/international-cooperation/initiative/InternationalCooperationInitiativeEdit'
    ),
);

export const InternationalCooperationInitiative = [
  {
    id: 'InternationalCooperationInitiative-show',
    route: '/international-cooperation/InternationalCooperationInitiative',
    component: <InternationalCooperationInitiativeShow />,
  },
  {
    id: 'InternationalCooperationInitiative-create',
    route: '/international-cooperation/InternationalCooperationInitiative/create',
    component: <InternationalCooperationInitiativeCreate />,
  },
  {
    id: 'InternationalCooperationInitiative-edit',
    route: '/international-cooperation/InternationalCooperationInitiative/edit/:id',
    component: <InternationalCooperationInitiativeEdit />,
  },
];
