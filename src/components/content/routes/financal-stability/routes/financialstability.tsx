import { lazy } from 'react';

const FinancialStabilityReportShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/financalstabilityreport/FinancialStabilityReportShow'
    ),
);
const FinancialStabilityReportCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/financalstabilityreport/FinancialStabilityReportCreate'
    ),
);
const FinancialStabilityReportEdit = lazy(
  () =>
    import(
      '../../../components/financal-stability/financalstabilityreport/FinancialStabilityReportEdit'
    ),
);

export const FinancialStabilityReport = [
  {
    id: 'FinancialStabilityReport-show',
    route: '/financial-stability/FinancialStabilityReport',
    component: <FinancialStabilityReportShow />,
  },
  {
    id: 'FinancialStabilityReport-edit',
    route: '/financial-stability/FinancialStabilityReport/edit/:id',
    component: <FinancialStabilityReportEdit />,
  },
  {
    id: 'FinancialStabilityReport-create',
    route: '/financial-stability/FinancialStabilityReport/create',
    component: <FinancialStabilityReportCreate />,
  },
];
