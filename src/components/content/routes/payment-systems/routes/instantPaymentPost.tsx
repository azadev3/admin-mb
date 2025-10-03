import { lazy } from 'react';

const InstantPaymentPostShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-post/InstantPaymentPostShow'
    ),
);
const InstantPaymentPostCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-post/InstantPaymentPostCreate'
    ),
);
const InstantPaymentPostEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-post/InstantPaymentPostEdit'
    ),
);

export const InstantPaymentPost = [
  {
    id: 'InstantPaymentPost-show',
    route: '/payment-systems/InstantPaymentPost',
    component: <InstantPaymentPostShow />,
  },
  {
    id: 'InstantPaymentPost-create',
    route: '/payment-systems/InstantPaymentPost/create',
    component: <InstantPaymentPostCreate />,
  },
  {
    id: 'InstantPaymentPost-create',
    route: '/payment-systems/InstantPaymentPost/edit/:id',
    component: <InstantPaymentPostEdit />,
  },
];
