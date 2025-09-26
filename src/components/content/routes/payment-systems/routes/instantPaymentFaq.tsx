import { lazy } from 'react';

const InstantPaymentFAQShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-faq/InstantPaymentFaqShow'
    ),
);
const InstantPaymentFAQCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-faq/InstantPaymentFaqCreate'
    ),
);
const InstantPaymentFAQEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-faq/InstantPaymentFaqEdit'
    ),
);

export const InstantPaymentFAQ = [
  {
    id: 'InstantPaymentFAQ-show',
    route: '/payment-systems/InstantPaymentFAQ',
    component: <InstantPaymentFAQShow />,
  },
  {
    id: 'InstantPaymentFAQ-create',
    route: '/payment-systems/InstantPaymentFAQ/create',
    component: <InstantPaymentFAQCreate />,
  },
  {
    id: 'InstantPaymentFAQ-create',
    route: '/payment-systems/InstantPaymentFAQ/edit/:id',
    component: <InstantPaymentFAQEdit />,
  },
];
