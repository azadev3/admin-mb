import HeroCreate from '../components/hero/HeroCreate';
import HeroShow from '../components/hero/HeroShow';

export const heroRoutes = [
  {
    id: 'hero-show',
    route: '/hero',
    component: <HeroShow />,
  },
  {
    id: 'hero-create',
    route: '/hero/create',
    component: <HeroCreate />,
  },
];
