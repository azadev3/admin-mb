import { lazy } from 'react';

const InstantPaymentOrganizationShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-organizations/InstantPaymentOrganizationShow'
    ),
);
const InstantPaymentOrganizationCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-organizations/InstantPaymentOrganizationCreate'
    ),
);
const InstantPaymentOrganizationEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/instant-payment-organizations/InstantPaymentOrganizationEdit'
    ),
);

export const InstantPaymentOrganization = [
  {
    id: 'InstantPaymentOrganization-show',
    route: '/payment-systems/InstantPaymentOrganization',
    component: <InstantPaymentOrganizationShow />,
  },
  {
    id: 'InstantPaymentOrganization-create',
    route: '/payment-systems/InstantPaymentOrganization/create',
    component: <InstantPaymentOrganizationCreate />,
  },
  {
    id: 'InstantPaymentOrganization-create',
    route: '/payment-systems/InstantPaymentOrganization/edit/:id',
    component: <InstantPaymentOrganizationEdit />,
  },
];
