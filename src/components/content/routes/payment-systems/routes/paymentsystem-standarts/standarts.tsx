import { lazy } from 'react';

const StandartsShow = lazy(
  () =>
    import(
      '../../../../components/payment-systems/paymentsystem-standarts/standarts/StandartsShow'
    ),
);
const StandartsCreate = lazy(
  () =>
    import(
      '../../../../components/payment-systems/paymentsystem-standarts/standarts/StandartsCreate'
    ),
);
const StandartsEdit = lazy(
  () =>
    import(
      '../../../../components/payment-systems/paymentsystem-standarts/standarts/StandartsEdit'
    ),
);

export const Standarts = [
  {
    id: 'Standarts-show',
    route: '/payment-systems/standarts/PaymentSystemStandart',
    component: <StandartsShow />,
  },
  {
    id: 'Standarts-create',
    route: '/payment-systems/standarts/PaymentSystemStandart/create',
    component: <StandartsCreate />,
  },
  {
    id: 'Standarts-create',
    route: '/payment-systems/standarts/PaymentSystemStandart/edit/:id',
    component: <StandartsEdit />,
  },
];
