import { lazy } from 'react';

const FinancialSearchSystemShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-search-system/FinancialSearchSystemShow'
    ),
);
const FinancialSearchSystemCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-search-system/FinancialSearchSystemCreate'
    ),
);
const FinancialSearchSystemEdit = lazy(
  () =>
    import(
      '../../../components/financial-literacy/financial-search-system/FinancialSearchSystemEdit'
    ),
);

export const FinancialSearchSystem = [
  {
    id: 'FinancialSearchSystem-show',
    route: '/financial-literacy/FinancialSearchSystem',
    component: <FinancialSearchSystemShow />,
  },
  {
    id: 'FinancialSearchSystem-create',
    route: '/financial-literacy/FinancialSearchSystem/create',
    component: <FinancialSearchSystemCreate />,
  },
  {
    id: 'FinancialSearchSystem-edit',
    route: '/financial-literacy/FinancialSearchSystem/edit/:id',
    component: <FinancialSearchSystemEdit />,
  },
];
