import { lazy } from 'react';

const FinancialStabilityReportCaptionsShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/reportcaptions/FinancialStabilityReportCaptionShow'
    ),
);
const FinancialStabilityReportCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/reportcaptions/FinancialStabilityReportCaptionCreate'
    ),
);

export const FinancialStabilityReportCaptions = [
  {
    id: 'FinancialStabilityReportCaptions-show',
    route: '/financial-stability/FinancialStabilityReportCaption',
    component: <FinancialStabilityReportCaptionsShow />,
  },
  {
    id: 'FinancialStabilityReportCaptions-create',
    route: '/financial-stability/FinancialStabilityReportCaption/create',
    component: <FinancialStabilityReportCaptionsCreate />,
  },
];
