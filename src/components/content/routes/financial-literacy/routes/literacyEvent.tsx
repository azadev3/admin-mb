import { lazy } from 'react';

const FinancialLiteracyEventShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-literacy-event/FinancialLiteracyEventShow'
    ),
);
const FinancialLiteracyEventCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-literacy-event/FinancialLiteracyEventCreate'
    ),
);
const FinancialLiteracyEventEdit = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-literacy-event/FinancialLiteracyEventEdit'
    ),
);

export const FinancialLiteracyEvent = [
  {
    id: 'FinancialLiteracyEvent-show',
    route: '/financial-literacy/FinancialLiteracyEvent',
    component: <FinancialLiteracyEventShow />,
  },
  {
    id: 'FinancialLiteracyEvent-create',
    route: '/financial-literacy/FinancialLiteracyEvent/create',
    component: <FinancialLiteracyEventCreate />,
  },
  {
    id: 'FinancialLiteracyEvent-edit',
    route: '/financial-literacy/FinancialLiteracyEvent/edit/:id',
    component: <FinancialLiteracyEventEdit />,
  },
];
