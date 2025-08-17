import LogoCreate from '../components/logo/LogoCreate';
import LogoShow from '../components/logo/LogoShow';

export const logoRoutes = [
  { id: 'logo-show', route: '/logo', component: <LogoShow /> },
  { id: 'logo-create', route: '/logo/create', component: <LogoCreate /> },
];
