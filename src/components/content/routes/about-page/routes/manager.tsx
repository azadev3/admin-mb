import { lazy } from 'react';

const ManagerCreate = lazy(
  () =>
    import('../../../../content/components/about-page/managers/manager/ManagerCreate'),
);
const ManagerEdit = lazy(
  () => import('../../../../content/components/about-page/managers/manager/ManagerEdit'),
);
const ManagerShow = lazy(
  () => import('../../../../content/components/about-page/managers/manager/ManagerShow'),
);

export const Manager = [
  {
    id: 'manager-show',
    route: '/haqqimizda/manager',
    component: <ManagerShow />,
  },
  {
    id: 'manager-create',
    route: '/haqqimizda/manager/create',
    component: <ManagerCreate />,
  },
  {
    id: 'manager-edit',
    route: '/haqqimizda/manager/edit/:id',
    component: <ManagerEdit />,
  },
];
