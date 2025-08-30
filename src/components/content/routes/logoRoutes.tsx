import { lazy } from 'react';
const LogoCreate = lazy(() => import('../components/logo/LogoCreate'));
const LogoShow = lazy(() => import('../components/logo/LogoShow'));

export const logoRoutes = [
  { id: 'logo-show', route: '/logo', component: <LogoShow /> },
  { id: 'logo-create', route: '/logo/create', component: <LogoCreate /> },
];
