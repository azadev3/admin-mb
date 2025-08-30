import { lazy } from 'react';

const OtherInfoCreate = lazy(
  () => import('../components/other-infos/OtherInfoCreate'),
);
const OtherInfoEdit = lazy(
  () => import('../components/other-infos/OtherInfoEdit'),
);
const OtherInfoShow = lazy(
  () => import('../components/other-infos/OtherInfoShow'),
);

export const otherInfoRoutes = [
  {
    id: 'other-info-show',
    route: '/diger-melumatlar',
    component: <OtherInfoShow />,
  },
  {
    id: 'other-info-create',
    route: '/diger-melumatlar/create',
    component: <OtherInfoCreate />,
  },
  {
    id: 'other-info-edit',
    route: '/diger-melumatlar/edit/:id',
    component: <OtherInfoEdit />,
  },
];
