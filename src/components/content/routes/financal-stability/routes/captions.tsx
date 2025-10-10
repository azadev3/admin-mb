import { lazy } from 'react';

const FinancialStabilityCaptionShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/captions/FinancialStabilityCaptionShow'
    ),
);
const FinancialStabilityCaptionCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/captions/FinancialStabilityCaptionCreate'
    ),
);

export const FinancialStabilityCaptions = [
  {
    id: 'FinancialStabilityCaption-show',
    route: '/financial-stability/FinancialStabilityCaption',
    component: <FinancialStabilityCaptionShow />,
  },
  {
    id: 'FinancialStabilityCaption-create',
    route: '/financial-stability/FinancialStabilityCaption/create',
    component: <FinancialStabilityCaptionCreate />,
  },
];
