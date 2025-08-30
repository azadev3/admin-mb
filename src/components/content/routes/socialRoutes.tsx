import { lazy } from 'react';

const SocialCreate = lazy(() => import('../components/socials/SocialCreate'));
const SocialEdit = lazy(() => import('../components/socials/SocialEdit'));
const SocialShow = lazy(() => import('../components/socials/SocialShow'));

export const socialRoutes = [
  { id: 'sosial-show', route: '/sosial', component: <SocialShow /> },
  {
    id: 'sosial-create',
    route: '/sosial/create',
    component: <SocialCreate />,
  },
  { id: 'sosial-edit', route: '/sosial/edit/:id', component: <SocialEdit /> },
];
