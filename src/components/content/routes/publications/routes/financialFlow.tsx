import { lazy } from 'react';

const FinancialFlowShow = lazy(
  () => import('../../../components/publications/financial-flow/FinancialFlowShow'),
);
const FinancialFlowCreate = lazy(
  () => import('../../../components/publications/financial-flow/FinancialFlowCreate'),
);
const FinancialFlowEdit = lazy(
  () => import('../../../components/publications/financial-flow/FinancialFlowEdit'),
);

export const FinancialFlow = [
  {
    id: 'FinancialFlow-show',
    route: '/publications/FinancialFlow',
    component: <FinancialFlowShow />,
  },
  {
    id: 'FinancialFlow-create',
    route: '/publications/FinancialFlow/create',
    component: <FinancialFlowCreate />,
  },
  {
    id: 'FinancialFlow-edit',
    route: '/publications/FinancialFlow/edit/:id',
    component: <FinancialFlowEdit />,
  },
];
