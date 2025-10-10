import { lazy } from 'react';

const CustomerRightCaptionsShow = lazy(
  () => import('../../../components/customer-rights/captions/CaptionsShow'),
);
const CustomerRightCaptionsCreate = lazy(
  () => import('../../../components/customer-rights/captions/CaptionsCreate'),
);

export const CustomerRightCaptions = [
  {
    id: 'customer-rights-captions-show',
    route: '/customer-rights/captions',
    component: <CustomerRightCaptionsShow />,
  },
  {
    id: 'customer-rights-captions-create',
    route: '/customer-rights/captions/create',
    component: <CustomerRightCaptionsCreate />,
  },
];
