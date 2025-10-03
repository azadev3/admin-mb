import { lazy } from 'react';

const CaptionsShow = lazy(
  () => import('../../../../components/payment-systems/state-programs/CaptionsShow'),
);
const CaptionsCreate = lazy(
  () => import('../../../../components/payment-systems/state-programs/CaptionsCreate'),
);

export const StateProgramsCaptions = [
  {
    id: 'PaymentSystemCaption-StatePrograms-show',
    route: '/payment-systems/state-programs/captions',
    component: <CaptionsShow />,
  },
  {
    id: 'PaymentSystemCaption-StatePrograms-create',
    route: '/payment-systems/state-programs/captions/create',
    component: <CaptionsCreate />,
  },
];
