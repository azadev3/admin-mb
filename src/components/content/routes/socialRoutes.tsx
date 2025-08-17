import SocialCreate from '../components/socials/SocialCreate';
import SocialEdit from '../components/socials/SocialEdit';
import SocialShow from '../components/socials/SocialShow';

export const socialRoutes = [
  { id: 'sosial-show', route: '/sosial', component: <SocialShow /> },
  {
    id: 'sosial-create',
    route: '/sosial/create',
    component: <SocialCreate />,
  },
  { id: 'sosial-edit', route: '/sosial/edit/:id', component: <SocialEdit /> },
];
