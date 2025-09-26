import { lazy } from 'react';

const DigitalPaymentReviewShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/digitalpayment-review/DigitalPaymentReviewShow'
    ),
);
const DigitalPaymentReviewCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/digitalpayment-review/DigitalPaymentReviewCreate'
    ),
);
const DigitalPaymentReviewEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/digitalpayment-review/DigitalPaymentReviewEdit'
    ),
);

export const DigitalPaymentReview = [
  {
    id: 'DigitalPaymentReview-show',
    route: '/payment-systems/DigitalPaymentReview',
    component: <DigitalPaymentReviewShow />,
  },
  {
    id: 'DigitalPaymentReview-create',
    route: '/payment-systems/DigitalPaymentReview/create',
    component: <DigitalPaymentReviewCreate />,
  },
  {
    id: 'DigitalPaymentReview-create',
    route: '/payment-systems/DigitalPaymentReview/edit/:id',
    component: <DigitalPaymentReviewEdit />,
  },
];
