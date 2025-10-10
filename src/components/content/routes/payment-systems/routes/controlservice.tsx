import { lazy } from 'react';

const PaymentSystemControlServiceShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/controlservice/PaymentSystemControlServiceShow'
    ),
);
const PaymentSystemControlServiceCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/controlservice/PaymentSystemControlServiceCreate'
    ),
);
const PaymentSystemControlServiceEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/controlservice/PaymentSystemControlServiceEdit'
    ),
);

export const PaymentSystemControlService = [
  {
    id: 'PaymentSystemControlService-show',
    route: '/payment-systems/PaymentSystemControlService',
    component: <PaymentSystemControlServiceShow />,
  },
  {
    id: 'PaymentSystemControlService-create',
    route: '/payment-systems/PaymentSystemControlService/create',
    component: <PaymentSystemControlServiceCreate />,
  },
  {
    id: 'PaymentSystemControlService-create',
    route: '/payment-systems/PaymentSystemControlService/edit/:id',
    component: <PaymentSystemControlServiceEdit />,
  },
];
