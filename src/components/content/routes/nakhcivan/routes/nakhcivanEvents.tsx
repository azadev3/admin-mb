import { lazy } from 'react';

const NakhcivanEventsShow = lazy(
  () => import('../../../components/nakhcivan/events/EventShow'),
);
const NakhcivanEventsCreate = lazy(
  () => import('../../../components/nakhcivan/events/EventCreate'),
);
const NakhcivanEventsEdit = lazy(
  () => import('../../../components/nakhcivan/events/EventEdit'),
);

export const NakhcivanEvents = [
  {
    id: 'nakhcivan-events-show',
    route: '/nakhcivan/events',
    component: <NakhcivanEventsShow />,
  },
  {
    id: 'nakhcivan-events-create',
    route: '/nakhcivan/events/create',
    component: <NakhcivanEventsCreate />,
  },
  {
    id: 'nakhcivan-events-edit',
    route: '/nakhcivan/events/edit/:id',
    component: <NakhcivanEventsEdit />,
  },
];
