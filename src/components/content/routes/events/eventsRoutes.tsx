import { Events } from './routes/events';
import { EventsContent } from './routes/eventsContent';
import { EventsImages } from './routes/eventsImages';
import { EventsVideos } from './routes/eventsVideos';
import { FutureEvents } from './routes/futureEvents';

export const eventsRoutes = [
  ...Events,
  ...EventsContent,
  ...EventsImages,
  ...EventsVideos,
  ...FutureEvents,
];
