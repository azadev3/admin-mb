import { lazy } from 'react';
const HeroShow = lazy(() => import('../components/hero/HeroShow'));
const HeroCreate = lazy(() => import('../components/hero/HeroCreate'));

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
