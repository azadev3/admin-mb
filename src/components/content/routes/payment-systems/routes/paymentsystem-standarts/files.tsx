import { lazy } from 'react';

const StandartsFilesShow = lazy(
  () =>
    import(
      '../../../../components/payment-systems/paymentsystem-standarts/files/PaymentSystemStandartFileShow'
    ),
);
const StandartsFilesCreate = lazy(
  () =>
    import(
      '../../../../components/payment-systems/paymentsystem-standarts/files/PaymentSystemStandartFileCreate'
    ),
);
const StandartsFilesEdit = lazy(
  () =>
    import(
      '../../../../components/payment-systems/paymentsystem-standarts/files/PaymentSystemStandartFileEdit'
    ),
);

export const StandartsFiles = [
  {
    id: 'StandartsFiles-show',
    route: '/payment-systems/standarts/PaymentSystemStandartFile',
    component: <StandartsFilesShow />,
  },
  {
    id: 'StandartsFiles-create',
    route: '/payment-systems/standarts/PaymentSystemStandartFile/create',
    component: <StandartsFilesCreate />,
  },
  {
    id: 'StandartsFiles-create',
    route: '/payment-systems/standarts/PaymentSystemStandartFile/edit/:id',
    component: <StandartsFilesEdit />,
  },
];
