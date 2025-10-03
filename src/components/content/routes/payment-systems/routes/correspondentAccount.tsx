import { lazy } from 'react';

const CorrespondentAccountShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/correspondent-account/CorrespondentAccountShow'
    ),
);
const CorrespondentAccountCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/correspondent-account/CorrespondentAccountCreate'
    ),
);
const CorrespondentAccountEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/correspondent-account/CorrespondentAccountEdit'
    ),
);

export const CorrespondentAccount = [
  {
    id: 'CorrespondentAccount-show',
    route: '/payment-systems/CorrespondentAccount',
    component: <CorrespondentAccountShow />,
  },
  {
    id: 'CorrespondentAccount-create',
    route: '/payment-systems/CorrespondentAccount/create',
    component: <CorrespondentAccountCreate />,
  },
  {
    id: 'CorrespondentAccount-create',
    route: '/payment-systems/CorrespondentAccount/edit/:id',
    component: <CorrespondentAccountEdit />,
  },
];
