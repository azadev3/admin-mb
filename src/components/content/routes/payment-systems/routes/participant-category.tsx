import { lazy } from 'react';

const ParticipantCategoryShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/participant-category/ParticipantCategoryShow'
    ),
);
const ParticipantCategoryCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/participant-category/ParticipantCategoryCreate'
    ),
);
const ParticipantCategoryEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/participant-category/ParticipantCategoryEdit'
    ),
);

export const ParticipantCategory = [
  {
    id: 'ParticipantCategory-show',
    route: '/payment-systems/ParticipantCategory',
    component: <ParticipantCategoryShow />,
  },
  {
    id: 'ParticipantCategory-create',
    route: '/payment-systems/ParticipantCategory/create',
    component: <ParticipantCategoryCreate />,
  },
  {
    id: 'ParticipantCategory-create',
    route: '/payment-systems/ParticipantCategory/edit/:id',
    component: <ParticipantCategoryEdit />,
  },
];
