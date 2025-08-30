import { lazy } from 'react';

const PhonesCreate = lazy(() => import('../components/phones/PhonesCreate'));
const PhonesEdit = lazy(() => import('../components/phones/PhonesEdit'));
const PhonesShow = lazy(() => import('../components/phones/PhonesShow'));

export const phonesRoutes = [
  { id: 'phones-show', route: '/telefonlar', component: <PhonesShow /> },
  {
    id: 'phones-create',
    route: '/telefonlar/create',
    component: <PhonesCreate />,
  },
  {
    id: 'phones-edit',
    route: '/telefonlar/edit/:id',
    component: <PhonesEdit />,
  },
];
