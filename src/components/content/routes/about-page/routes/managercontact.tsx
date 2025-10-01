import { lazy } from 'react';

const ManagerContactCreate = lazy(
  () =>
    import(
      '../../../../content/components/about-page/managers/manager-contact/ManagerContactCreate'
    ),
);
const ManagerContactEdit = lazy(
  () =>
    import(
      '../../../../content/components/about-page/managers/manager-contact/ManagerContactEdit'
    ),
);
const ManagerContactShow = lazy(
  () =>
    import(
      '../../../../content/components/about-page/managers/manager-contact/ManagerContactShow'
    ),
);

export const ManagerContact = [
  {
    id: 'ManagerContact-show',
    route: '/haqqimizda/managercontact',
    component: <ManagerContactShow />,
  },
  {
    id: 'ManagerContact-create',
    route: '/haqqimizda/managercontact/create',
    component: <ManagerContactCreate />,
  },
  {
    id: 'ManagerContact-edit',
    route: '/haqqimizda/managercontact/edit/:id',
    component: <ManagerContactEdit />,
  },
];
