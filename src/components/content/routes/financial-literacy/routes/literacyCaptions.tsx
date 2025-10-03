import { lazy } from 'react';

const FinancialLiteracyCaptionShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/captions/FinancialLiteracyCaptionShow'
    ),
);
const FinancialLiteracyCaptionCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/captions/FinancialLiteracyCaptionCreate'
    ),
);

export const FinancialLiteracyCaption = [
  {
    id: 'FinancialLiteracyCaption-show',
    route: '/financial-literacy/FinancialLiteracyCaption',
    component: <FinancialLiteracyCaptionShow />,
  },
  {
    id: 'FinancialLiteracyCaption-create',
    route: '/financial-literacy/FinancialLiteracyCaption/create',
    component: <FinancialLiteracyCaptionCreate />,
  },
];
