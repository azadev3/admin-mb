import { lazy } from 'react';

// captions
const PaymentAgentCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/payment/payment-captions/PaymentCaptionsCreate'
    ),
);
const PaymentAgentCaptionsShow = lazy(
  () =>
    import(
      '../../../components/market-participants/payment/payment-captions/PaymentCaptionsShow'
    ),
);
// files and values
const PaymentAgentFilesCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/payment/payment-files/PaymentFilesCreate'
    ),
);
const PaymentAgentFilesShow = lazy(
  () =>
    import(
      '../../../components/market-participants/payment/payment-files/PaymentFilesShow'
    ),
);
const PaymentAgentFilesEdit = lazy(
  () =>
    import(
      '../../../components/market-participants/payment/payment-files/PaymentFilesEdit'
    ),
);

export const creditUnionPaymentRoutes = [
  // captions
  {
    id: 'creditunions-payment-show',
    route: '/market-participants/banks/payment/captions',
    component: <PaymentAgentCaptionsShow />,
  },
  {
    id: 'crediunions-payment-captions-create',
    route: '/market-participants/banks/payment/captions/create',
    component: <PaymentAgentCaptionsCreate />,
  },
  // files and values
  {
    id: 'creditunions-payment-files-show',
    route: '/market-participants/banks/payment/files',
    component: <PaymentAgentFilesShow />,
  },
  {
    id: 'crediunions-payment-files-create',
    route: '/market-participants/banks/payment/files/create',
    component: <PaymentAgentFilesCreate />,
  },
  {
    id: 'crediunions-payment-files-edit',
    route: '/market-participants/banks/payment/files/edit/:id',
    component: <PaymentAgentFilesEdit />,
  },
];
