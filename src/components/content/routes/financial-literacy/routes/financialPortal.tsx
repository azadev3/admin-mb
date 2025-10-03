import { lazy } from 'react';

const FinancialLiteracyPortalShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-literacy-portal/FinancialLiteracyPortalShow'
    ),
);
const FinancialLiteracyPortalCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-literacy-portal/FinancialLiteracyPortalCreate'
    ),
);
const FinancialLiteracyPortalEdit = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-literacy-portal/FinancialLiteracyPortalEdit'
    ),
);

export const FinancialLiteracyPortal = [
  {
    id: 'FinancialLiteracyPortal-show',
    route: '/financial-literacy/FinancialLiteracyPortal',
    component: <FinancialLiteracyPortalShow />,
  },
  {
    id: 'FinancialLiteracyPortal-create',
    route: '/financial-literacy/FinancialLiteracyPortal/create',
    component: <FinancialLiteracyPortalCreate />,
  },
  {
    id: 'FinancialLiteracyPortal-edit',
    route: '/financial-literacy/FinancialLiteracyPortal/edit/:id',
    component: <FinancialLiteracyPortalEdit />,
  },
];
