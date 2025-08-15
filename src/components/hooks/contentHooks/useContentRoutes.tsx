import Home from '../../content/components/home/Home';
import LogoCreate from '../../content/components/logo/LogoCreate';
import LogoEdit from '../../content/components/logo/LogoEdit';
import type { ContentRoutesInterface } from '../../types/content/routeType';
import LogoShow from '../../content/components/logo/LogoShow';

export const useContentRoutes = () => {
  const routes: ContentRoutesInterface[] = [
    {
      id: 1,
      route: '/',
      component: <Home />,
    },
    {
      id: 2,
      route: '/logo',
      component: <LogoShow />,
    },
    {
      id: 3,
      route: '/logo/create',
      component: <LogoCreate />,
    },
    {
      id: 4,
      route: '/logo/edit/:id',
      component: <LogoEdit />,
    },
  ];

  return {
    routes,
  };
};
