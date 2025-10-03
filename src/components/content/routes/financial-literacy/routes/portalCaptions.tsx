import { lazy } from 'react';

const FinancialLiteracyPortalCaptionShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/portalcaption/FinancialLiteracyPortalCaptionShow'
    ),
);
const FinancialLiteracyPortalCaptionCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/portalcaption/FinancialLiteracyPortalCaptionCreate'
    ),
);
const FinancialLiteracyPortalCaptionEdit = lazy(
  () =>
    import(
      '../../../components/financial-literacy/portalcaption/FinancialLiteracyPortalCaptionEdit'
    ),
);

export const FinancialLiteracyPortalCaption = [
  {
    id: 'FinancialLiteracyPortalCaption-show',
    route: '/financial-literacy/FinancialLiteracyPortalCaption',
    component: <FinancialLiteracyPortalCaptionShow />,
  },
  {
    id: 'FinancialLiteracyPortalCaption-create',
    route: '/financial-literacy/FinancialLiteracyPortalCaption/create',
    component: <FinancialLiteracyPortalCaptionCreate />,
  },
  {
    id: 'FinancialLiteracyPortalCaption-edit',
    route: '/financial-literacy/FinancialLiteracyPortalCaption/edit/:id',
    component: <FinancialLiteracyPortalCaptionEdit />,
  },
];
