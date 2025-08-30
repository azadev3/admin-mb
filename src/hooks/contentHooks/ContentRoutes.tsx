import { lazy } from 'react';
import type { ContentRoutesInterface } from '../../components/types/content/routeType';
import { heroRoutes } from '../../components/content/routes/heroRoutes';
import { focusRoutes } from '../../components/content/routes/focusRoutes';
import { blogsRoutes } from '../../components/content/routes/blogRoutes';
import { advertisementRoutes } from '../../components/content/routes/advertisementRoutes';
import { interviewRoutes } from '../../components/content/routes/interviewRoutes';
import { digitalPortalRoutes } from '../../components/content/routes/digitalPortalRoutes';
import { mediaRoutes } from '../../components/content/routes/mediaRoutes';
import { macroDocumentRoutes } from '../../components/content/routes/macroDocumentRoutes';
import { otherInfoRoutes } from '../../components/content/routes/otherInfoRoutes';
import { socialRoutes } from '../../components/content/routes/socialRoutes';
import { phonesRoutes } from '../../components/content/routes/phonesRoutes';
import { translatesRoutes } from '../../components/content/routes/translatesRoutes';
import { percentCorridorRoutes } from '../../components/content/routes/percentCorridorRoutes';
import { bankSectoryRoutes } from '../../components/content/routes/bankSectoryRoutes';
import { monetarRoutes } from '../../components/content/routes/monetarRoutes';
import { inflationRoutes } from '../../components/content/routes/inflationRoutes';
import { aboutRoutes } from '../../components/content/routes/about-page/aboutRoutes';
import { logoRoutes } from '../../components/content/routes/logoRoutes';
const Home = lazy(
  () => import('../../components/content/components/home/Home'),
);

export const CONTENT_ROUTES: ContentRoutesInterface[] = [
  { id: 'home-charts', route: '/', component: <Home /> },
  ...logoRoutes,
  ...heroRoutes,
  ...focusRoutes,
  ...blogsRoutes,
  ...advertisementRoutes,
  ...interviewRoutes,
  ...digitalPortalRoutes,
  ...mediaRoutes,
  ...macroDocumentRoutes,
  ...otherInfoRoutes,
  ...socialRoutes,
  ...phonesRoutes,
  ...translatesRoutes,
  ...percentCorridorRoutes,
  ...bankSectoryRoutes,
  ...monetarRoutes,
  ...inflationRoutes,
  ...aboutRoutes,
];
