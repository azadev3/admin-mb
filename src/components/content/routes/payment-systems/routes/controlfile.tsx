import { lazy } from 'react';

const PaymentSystemControlFileShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/controlfile/PaymentSystemControlFileShow'
    ),
);
const PaymentSystemControlFileCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/controlfile/PaymentSystemControlFileCreate'
    ),
);
const PaymentSystemControlFileEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/controlfile/PaymentSystemControlFileEdit'
    ),
);

export const PaymentSystemControlFile = [
  {
    id: 'PaymentSystemControlFile-show',
    route: '/payment-systems/PaymentSystemControlFile',
    component: <PaymentSystemControlFileShow />,
  },
  {
    id: 'PaymentSystemControlFile-create',
    route: '/payment-systems/PaymentSystemControlFile/create',
    component: <PaymentSystemControlFileCreate />,
  },
  {
    id: 'PaymentSystemControlFile-create',
    route: '/payment-systems/PaymentSystemControlFile/edit/:id',
    component: <PaymentSystemControlFileEdit />,
  },
];
