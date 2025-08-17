import PhonesCreate from '../components/phones/PhonesCreate';
import PhonesEdit from '../components/phones/PhonesEdit';
import PhonesShow from '../components/phones/PhonesShow';

export const phonesRoutes = [
  { id: 'phones-show', route: '/telefonlar', component: <PhonesShow /> },
  {
    id: 'phones-create',
    route: '/telefonlar/create',
    component: <PhonesCreate />,
  },
  { id: 'phones-edit', route: '/telefonlar/edit/:id', component: <PhonesEdit /> },
];
