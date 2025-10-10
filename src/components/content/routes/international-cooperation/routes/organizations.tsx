import { lazy } from 'react';

const InternationalFinancialOrganizationShow = lazy(
  () =>
    import(
      '../../../components/international-cooperation/organizations/InternationalFinancialOrganizationShow'
    ),
);
const InternationalFinancialOrganizationCreate = lazy(
  () =>
    import(
      '../../../components/international-cooperation/organizations/InternationalFinancialOrganizationCreate'
    ),
);

export const InternationalFinancialOrganization = [
  {
    id: 'InternationalFinancialOrganization-show',
    route: '/international-cooperation/InternationalFinancialOrganization',
    component: <InternationalFinancialOrganizationShow />,
  },
  {
    id: 'InternationalFinancialOrganization-create',
    route: '/international-cooperation/InternationalFinancialOrganization/create',
    component: <InternationalFinancialOrganizationCreate />,
  },
];
