import Home from '../../content/components/home/Home';
import type { ContentRoutesInterface } from '../../types/content/routeType';
import { logoRoutes } from '../../content/routes/logoRoutes';
import { heroRoutes } from '../../content/routes/heroRoutes';
import { focusRoutes } from '../../content/routes/focusRoutes';
import { blogsRoutes } from '../../content/routes/blogRoutes';
import { advertisementRoutes } from '../../content/routes/advertisementRoutes';
import { interviewRoutes } from '../../content/routes/interviewRoutes';
import { digitalPortalRoutes } from '../../content/routes/digitalPortalRoutes';
import { mediaRoutes } from '../../content/routes/mediaRoutes';
import { macroDocumentRoutes } from '../../content/routes/macroDocumentRoutes';
import { otherInfoRoutes } from '../../content/routes/otherInfoRoutes';
import { socialRoutes } from '../../content/routes/socialRoutes';
import { phonesRoutes } from '../../content/routes/phonesRoutes';
import { translatesRoutes } from '../../content/routes/translatesRoutes';

export const useContentRoutes = () => {
  const routes: ContentRoutesInterface[] = [
    {
      id: 'home-charts',
      route: '/',
      component: <Home />,
    },
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
  ];

  return {
    routes,
  };
};
