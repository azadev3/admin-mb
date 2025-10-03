import { lazy } from 'react';

const CaptionsShow = lazy(
  () => import('../../../components/international-cooperation/captions/CaptionsShow'),
);
const CaptionsCreate = lazy(
  () => import('../../../components/international-cooperation/captions/CaptionsCreate'),
);

export const InternationalCooperationCaption = [
  {
    id: 'InternationalCooperationCaption-show',
    route: '/international-cooperation/InternationalCooperationCaption',
    component: <CaptionsShow />,
  },
  {
    id: 'InternationalCooperationCaption-create',
    route: '/international-cooperation/InternationalCooperationCaption/create',
    component: <CaptionsCreate />,
  },
];
