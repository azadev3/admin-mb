import { lazy } from 'react';

const EventImagesCreate = lazy(
  () => import('../../../components/media/events/event-images/EventImagesCreate'),
);
const EventImagesEdit = lazy(
  () => import('../../../components/media/events/event-images/EventImagesEdit'),
);
const EventImagesShow = lazy(
  () => import('../../../components/media/events/event-images/EventImagesShow'),
);

export const EventsImages = [
  { id: 'events-images-show', route: '/eventimage', component: <EventImagesShow /> },
  {
    id: 'events-images-create',
    route: '/eventimage/create',
    component: <EventImagesCreate />,
  },
  {
    id: 'event-images-edit',
    route: '/eventimage/edit/:id',
    component: <EventImagesEdit />,
  },
];
