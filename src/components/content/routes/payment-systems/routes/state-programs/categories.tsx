import { lazy } from 'react';

const CategoriesShow = lazy(
  () => import('../../../../components/payment-systems/state-programs/CategoriesShow'),
);
const CategoriesCreate = lazy(
  () => import('../../../../components/payment-systems/state-programs/CategoriesCreate'),
);
const CategoriesEdit = lazy(
  () => import('../../../../components/payment-systems/state-programs/CategoriesEdit'),
);

export const StateProgramCategories = [
  {
    id: 'Categories-show',
    route: '/payment-systems/state-programs/categories',
    component: <CategoriesShow />,
  },
  {
    id: 'Categories-create',
    route: '/payment-systems/state-programs/categories/create',
    component: <CategoriesCreate />,
  },
  {
    id: 'Categories-create',
    route: '/payment-systems/state-programs/categories/edit/:id',
    component: <CategoriesEdit />,
  },
];
