import { NakhcivanBlogs } from './routes/nakhcivanBlogs';
import { StatisticalBulletin } from './routes/nakhcivanBulletin';
import { NakhcivanContact } from './routes/nakhcivanContact';
import { NakhcivanEvents } from './routes/nakhcivanEvents';
import { StatisticalPublication } from './routes/statisticPublication';

export const nakhcivanRoutes = [
  ...StatisticalBulletin,
  ...StatisticalPublication,
  ...NakhcivanBlogs,
  ...NakhcivanEvents,
  ...NakhcivanContact
];
