import { lazy } from 'react';

const EventsShow = lazy(
  () => import('../../../components/media/events/event-captions/EventsShow'),
);
const EventsCreate = lazy(
  () => import('../../../components/media/events/event-captions/EventsCreate'),
);
const EventsEdit = lazy(
  () => import('../../../components/media/events/event-captions/EventsEdit'),
);

export const Events = [
  { id: 'events-show', route: '/events', component: <EventsShow /> },
  {
    id: 'events-create',
    route: '/events/create',
    component: <EventsCreate />,
  },
  { id: 'events-edit', route: '/events/edit/:id', component: <EventsEdit /> },
];
