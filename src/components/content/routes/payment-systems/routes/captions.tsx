import { lazy } from 'react';

const CaptionsShow = lazy(
  () => import('../../../components/payment-systems/captions/CaptionsShow'),
);
const CaptionsCreate = lazy(
  () => import('../../../components/payment-systems/captions/CaptionsCreate'),
);

export const Captions = [
  {
    id: 'PaymentSystemCaption-show',
    route: '/payment-systems/PaymentSystemCaption',
    component: <CaptionsShow />,
  },
  {
    id: 'PaymentSystemCaption-create',
    route: '/payment-systems/PaymentSystemCaption/create',
    component: <CaptionsCreate />,
  },
];
