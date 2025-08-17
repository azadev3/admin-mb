import TranslatesCreate from '../components/translates/TranslatesCreate';
import TranslatesEdit from '../components/translates/TranslatesEdit';
import TranslatesShow from '../components/translates/TranslatesShow';

export const translatesRoutes = [
  { id: 'translates-show', route: '/tercumeler', component: <TranslatesShow /> },
  {
    id: 'translates-create',
    route: '/tercumeler/create',
    component: <TranslatesCreate />,
  },
  { id: 'translates-edit', route: '/tercumeler/edit/:id', component: <TranslatesEdit /> },
];
