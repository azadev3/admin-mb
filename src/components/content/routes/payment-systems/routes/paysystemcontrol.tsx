import { lazy } from 'react';

const PaySystemControlShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/paysystemcontrol/PaymentSystemControlShow'
    ),
);
const PaySystemControlCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/paysystemcontrol/PaymentSystemControlCreate'
    ),
);
const PaySystemControlEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/paysystemcontrol/PaymentSystemControlEdit'
    ),
);

export const PaySystemControl = [
  {
    id: 'PaySystemControl-show',
    route: '/payment-systems/PaymentSystemControl',
    component: <PaySystemControlShow />,
  },
  {
    id: 'PaySystemControl-create',
    route: '/payment-systems/PaymentSystemControl/create',
    component: <PaySystemControlCreate />,
  },
  {
    id: 'PaySystemControl-create',
    route: '/payment-systems/PaymentSystemControl/edit/:id',
    component: <PaySystemControlEdit />,
  },
];
