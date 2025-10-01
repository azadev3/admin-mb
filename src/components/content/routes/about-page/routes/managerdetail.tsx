import { lazy } from 'react';

const ManagerDetailCreate = lazy(
  () =>
    import(
      '../../../../content/components/about-page/managers/manager-detail/ManagerDetailCreate'
    ),
);
const ManagerDetailEdit = lazy(
  () =>
    import(
      '../../../../content/components/about-page/managers/manager-detail/ManagerDetailEdit'
    ),
);
const ManagerDetailShow = lazy(
  () =>
    import(
      '../../../../content/components/about-page/managers/manager-detail/ManagerDetailShow'
    ),
);

export const ManagerDetail = [
  {
    id: 'ManagerDetail-show',
    route: '/haqqimizda/managerdetail',
    component: <ManagerDetailShow />,
  },
  {
    id: 'ManagerDetail-create',
    route: '/haqqimizda/managerdetail/create',
    component: <ManagerDetailCreate />,
  },
  {
    id: 'ManagerDetail-edit',
    route: '/haqqimizda/managerdetail/edit/:id',
    component: <ManagerDetailEdit />,
  },
];
