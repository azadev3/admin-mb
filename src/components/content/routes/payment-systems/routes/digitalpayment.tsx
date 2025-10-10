import { lazy } from 'react';

const DigitalPaymentShow = lazy(
  () => import('../../../components/payment-systems/digital-payment/DigitalPaymentShow'),
);
const DigitalPaymentCreate = lazy(
  () =>
    import('../../../components/payment-systems/digital-payment/DigitalPaymentCreate'),
);
const DigitalPaymentEdit = lazy(
  () => import('../../../components/payment-systems/digital-payment/DigitalPaymentEdit'),
);

export const DigitalPayment = [
  {
    id: 'DigitalPayment-show',
    route: '/payment-systems/DigitalPayment',
    component: <DigitalPaymentShow />,
  },
  {
    id: 'DigitalPayment-create',
    route: '/payment-systems/DigitalPayment/create',
    component: <DigitalPaymentCreate />,
  },
  {
    id: 'DigitalPayment-create',
    route: '/payment-systems/DigitalPayment/edit/:id',
    component: <DigitalPaymentEdit />,
  },
];
