import { lazy } from 'react';

const TranslatesCreate = lazy(
  () => import('../components/translates/TranslatesCreate'),
);
const TranslatesEdit = lazy(
  () => import('../components/translates/TranslatesEdit'),
);
const TranslatesShow = lazy(
  () => import('../components/translates/TranslatesShow'),
);

export const translatesRoutes = [
  {
    id: 'translates-show',
    route: '/tercumeler',
    component: <TranslatesShow />,
  },
  {
    id: 'translates-create',
    route: '/tercumeler/create',
    component: <TranslatesCreate />,
  },
  {
    id: 'translates-edit',
    route: '/tercumeler/edit/:id',
    component: <TranslatesEdit />,
  },
];
