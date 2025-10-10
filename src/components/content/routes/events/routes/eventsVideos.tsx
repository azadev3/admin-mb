import { lazy } from 'react';

const EventVideosCreate = lazy(
  () => import('../../../components/media/events/event-videos/EventVideosCreate'),
);
const EventVideosEdit = lazy(
  () => import('../../../components/media/events/event-videos/EventVideosEdit'),
);
const EventVideosShow = lazy(
  () => import('../../../components/media/events/event-videos/EventVideosShow'),
);

export const EventsVideos = [
  { id: 'events-videos-show', route: '/eventvideo', component: <EventVideosShow /> },
  {
    id: 'events-videos-create',
    route: '/eventvideo/create',
    component: <EventVideosCreate />,
  },
  {
    id: 'event-videos-edit',
    route: '/eventvideo/edit/:id',
    component: <EventVideosEdit />,
  },
];
