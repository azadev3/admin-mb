import { lazy } from 'react';

const FinancialLiteracyEventCaptionShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/eventcaption/FinancialLiteracyEventCaptionShow'
    ),
);
const FinancialLiteracyEventCaptionCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/eventcaption/FinancialLiteracyEventCaptionCreate'
    ),
);
const FinancialLiteracyEventCaptionEdit = lazy(
  () =>
    import(
      '../../../components/financial-literacy/eventcaption/FinancialLiteracyEventCaptionEdit'
    ),
);

export const FinancialLiteracyEventCaption = [
  {
    id: 'FinancialLiteracyEventCaption-show',
    route: '/financial-literacy/FinancialLiteracyEventCaption',
    component: <FinancialLiteracyEventCaptionShow />,
  },
  {
    id: 'FinancialLiteracyEventCaption-create',
    route: '/financial-literacy/FinancialLiteracyEventCaption/create',
    component: <FinancialLiteracyEventCaptionCreate />,
  },
  {
    id: 'FinancialLiteracyEventCaption-edit',
    route: '/financial-literacy/FinancialLiteracyEventCaption/edit/:id',
    component: <FinancialLiteracyEventCaptionEdit />,
  },
];
