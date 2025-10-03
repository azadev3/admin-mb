import { lazy } from 'react';

const NakhcivanContactShow = lazy(
  () => import('../../../components/nakhcivan/contact/ContactShow'),
);
const NakhcivanContactCreate = lazy(
  () => import('../../../components/nakhcivan/contact/ContactCreate'),
);
const NakhcivanContactEdit = lazy(
  () => import('../../../components/nakhcivan/contact/ContactEdit'),
);

export const NakhcivanContact = [
  {
    id: 'nakhcivan-contact-show',
    route: '/nakhcivan/contact',
    component: <NakhcivanContactShow />,
  },
  {
    id: 'nakhcivan-contact-create',
    route: '/nakhcivan/contact/create',
    component: <NakhcivanContactCreate />,
  },
  {
    id: 'nakhcivan-contact-edit',
    route: '/nakhcivan/contact/edit/:id',
    component: <NakhcivanContactEdit />,
  },
];
