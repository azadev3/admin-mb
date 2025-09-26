import { lazy } from 'react';

const FinancialInstitutionShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/financial-instution/FinancialInstitutionShow'
    ),
);
const FinancialInstitutionCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/financial-instution/FinancialInstitutionCreate'
    ),
);

export const FinancialInstitutions = [
  {
    id: 'FinancialInstitution-show',
    route: '/financial-stability/FinancialInstitution',
    component: <FinancialInstitutionShow />,
  },
  {
    id: 'FinancialInstitution-create',
    route: '/financial-stability/FinancialInstitution/create',
    component: <FinancialInstitutionCreate />,
  },
];
