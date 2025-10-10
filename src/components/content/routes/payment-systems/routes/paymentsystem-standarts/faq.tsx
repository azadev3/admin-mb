import { lazy } from 'react';

const FaqShow = lazy(
  () =>
    import('../../../../components/payment-systems/paymentsystem-standarts/faqs/FaqShow'),
);
const FaqCreate = lazy(
  () =>
    import(
      '../../../../components/payment-systems/paymentsystem-standarts/faqs/FaqCreate'
    ),
);
const FaqEdit = lazy(
  () =>
    import('../../../../components/payment-systems/paymentsystem-standarts/faqs/FaqEdit'),
);

export const Faq = [
  {
    id: 'Faq-show',
    route: '/payment-systems/standarts/faq',
    component: <FaqShow />,
  },
  {
    id: 'Faq-create',
    route: '/payment-systems/standarts/faq/create',
    component: <FaqCreate />,
  },
  {
    id: 'Faq-create',
    route: '/payment-systems/standarts/faq/edit/:id',
    component: <FaqEdit />,
  },
];
