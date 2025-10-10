import { lazy } from 'react';

const FutureEventCreate = lazy(
  () => import('../../../components/media/events/event-future/FutureEventCreate'),
);
const FutureEventEdit = lazy(
  () => import('../../../components/media/events/event-future/FutureEventEdit'),
);
const FutureEventShow = lazy(
  () => import('../../../components/media/events/event-future/FutureEventShow'),
);

export const FutureEvents = [
  { id: 'futureevents-show', route: '/futureevent', component: <FutureEventShow /> },
  {
    id: 'futureevents-create',
    route: '/futureevent/create',
    component: <FutureEventCreate />,
  },
  {
    id: 'futureevent-edit',
    route: '/futureevent/edit/:id',
    component: <FutureEventEdit />,
  },
];
