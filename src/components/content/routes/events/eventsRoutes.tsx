import { lazy } from 'react';
import EventImagesShow from '../../components/media/events/event-images/EventImagesShow';
import EventImagesCreate from '../../components/media/events/event-images/EventImagesCreate';
import EventImagesEdit from '../../components/media/events/event-images/EventImagesEdit';
import EventVideosShow from '../../components/media/events/event-videos/EventVideosShow';
import EventVideosCreate from '../../components/media/events/event-videos/EventVideosCreate';
import EventVideosEdit from '../../components/media/events/event-videos/EventVideosEdit';
import FutureEventShow from '../../components/media/events/event-future/FutureEventShow';
import FutureEventCreate from '../../components/media/events/event-future/FutureEventCreate';
import FutureEventEdit from '../../components/media/events/event-future/FutureEventEdit';

// title and desc
const EventsShow = lazy(
  () => import('../../components/media/events/event-captions/EventsShow'),
);
const EventsCreate = lazy(
  () => import('../../components/media/events/event-captions/EventsCreate'),
);
const EventsEdit = lazy(
  () => import('../../components/media/events/event-captions/EventsEdit'),
);

// title & desc and images for inner content
const EventsContentCreate = lazy(
  () => import('../../components/media/events/event-contents/EventsContentCreate'),
);
const EventsContentEdit = lazy(
  () => import('../../components/media/events/event-contents/EventsContentEdit'),
);
const EventsContentShow = lazy(
  () => import('../../components/media/events/event-contents/EventsContentShow'),
);

export const eventsRoutes = [
  { id: 'events-show', route: '/events', component: <EventsShow /> },
  {
    id: 'events-create',
    route: '/events/create',
    component: <EventsCreate />,
  },
  { id: 'events-edit', route: '/events/edit/:id', component: <EventsEdit /> },
  // content
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
  // event images
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
  // event videos
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
  // future events
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
