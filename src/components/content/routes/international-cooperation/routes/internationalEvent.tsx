import { lazy } from 'react';

const InternationalEventShow = lazy(
  () =>
    import(
      '../../../components/international-cooperation/international-event/InternationalEventShow'
    ),
);
const InternationalEventCreate = lazy(
  () =>
    import(
      '../../../components/international-cooperation/international-event/InternationalEventCreate'
    ),
);
const InternationalEventEdit = lazy(
  () =>
    import(
      '../../../components/international-cooperation/international-event/InternationalEventEdit'
    ),
);

export const InternationalEvent = [
  {
    id: 'InternationalEvent-show',
    route: '/international-cooperation/InternationalEvent',
    component: <InternationalEventShow />,
  },
  {
    id: 'InternationalEvent-create',
    route: '/international-cooperation/InternationalEvent/create',
    component: <InternationalEventCreate />,
  },
  {
    id: 'InternationalEvent-edit',
    route: '/international-cooperation/InternationalEvent/edit/:id',
    component: <InternationalEventEdit />,
  },
];
