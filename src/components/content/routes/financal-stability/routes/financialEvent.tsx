import { lazy } from 'react';

const FinancialEventShow = lazy(
  () =>
    import('../../../components/financal-stability/financial-events/FinancialEventsShow'),
);
const FinancialEventCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/financial-events/FinancialEventsCreate'
    ),
);
const FinancialEventEdit = lazy(
  () =>
    import('../../../components/financal-stability/financial-events/FinancialEventsEdit'),
);

export const FinancialEvent = [
  {
    id: 'FinancialEvent-show',
    route: '/financial-stability/FinancialEvent',
    component: <FinancialEventShow />,
  },
  {
    id: 'FinancialEvent-edit',
    route: '/financial-stability/FinancialEvent/edit/:id',
    component: <FinancialEventEdit />,
  },
  {
    id: 'FinancialEvent-create',
    route: '/financial-stability/FinancialEvent/create',
    component: <FinancialEventCreate />,
  },
];
