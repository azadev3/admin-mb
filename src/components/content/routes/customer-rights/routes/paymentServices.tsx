import { lazy } from 'react';

const PaymentServicesShow = lazy(
  () =>
    import('../../../components/customer-rights/payment-services/PaymentServicesShow'),
);
const PaymentServicesCreate = lazy(
  () =>
    import('../../../components/customer-rights/payment-services/PaymentServicesCreate'),
);

const PaymentServicesEdit = lazy(
  () =>
    import('../../../components/customer-rights/payment-services/PaymentServicesEdit'),
);

export const PaymentServices = [
  {
    id: 'customer-rights-PaymentServices-show',
    route: '/customer-rights/payment-services',
    component: <PaymentServicesShow />,
  },
  {
    id: 'customer-rights-PaymentServices-create',
    route: '/customer-rights/payment-services/create',
    component: <PaymentServicesCreate />,
  },
  {
    id: 'customer-rights-PaymentServices-create',
    route: '/customer-rights/payment-services/edit/:id',
    component: <PaymentServicesEdit />,
  },
];
