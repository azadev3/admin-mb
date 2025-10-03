import { lazy } from 'react';

const DisclosureShow = lazy(
  () => import('../../../components/financal-stability/disclosure/DisclosureShow'),
);
const DisclosureCreate = lazy(
  () => import('../../../components/financal-stability/disclosure/DisclosureCreate'),
);
const DisclosureEdit = lazy(
  () => import('../../../components/financal-stability/disclosure/DisclosureEdit'),
);

export const Disclosure = [
  {
    id: 'Disclosure-show',
    route: '/financial-stability/Disclosure',
    component: <DisclosureShow />,
  },
  {
    id: 'Disclosure-edit',
    route: '/financial-stability/Disclosure/edit/:id',
    component: <DisclosureEdit />,
  },
  {
    id: 'Disclosure-create',
    route: '/financial-stability/Disclosure/create',
    component: <DisclosureCreate />,
  },
];
