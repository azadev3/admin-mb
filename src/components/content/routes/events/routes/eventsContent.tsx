import { lazy } from 'react';

const EventsContentCreate = lazy(
  () => import('../../../components/media/events/event-contents/EventsContentCreate'),
);
const EventsContentEdit = lazy(
  () => import('../../../components/media/events/event-contents/EventsContentEdit'),
);
const EventsContentShow = lazy(
  () => import('../../../components/media/events/event-contents/EventsContentShow'),
);

export const EventsContent = [
  { id: 'events-content-show', route: '/eventcontent', component: <EventsContentShow /> },
  {
    id: 'events-content-create',
    route: '/eventcontent/create',
    component: <EventsContentCreate />,
  },
  {
    id: 'eventcontent-edit',
    route: '/eventcontent/edit/:id',
    component: <EventsContentEdit />,
  },
];
