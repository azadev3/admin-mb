import { lazy } from 'react';

const InstantPaymentSystemControlFilelerShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-systems/InstantPaymentSystemControlFilelerShow'
    ),
);
const InstantPaymentSystemControlFilelerCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-systems/InstantPaymentSystemControlFilelerCreate'
    ),
);

export const InstantPaymentSystemControlFileler = [
  {
    id: 'InstantPaymentSystemControlFileler-show',
    route: '/payment-systems/InstantPaymentSystemControlFileler',
    component: <InstantPaymentSystemControlFilelerShow />,
  },
  {
    id: 'InstantPaymentSystemControlFileler-create',
    route: '/payment-systems/InstantPaymentSystemControlFileler/create',
    component: <InstantPaymentSystemControlFilelerCreate />,
  },
];
