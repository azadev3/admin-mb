import { lazy } from 'react';

const VirtualActiveShow = lazy(
  () =>
    import('../../../components/financal-innovation/virtual-active/VirtualActiveShow'),
);
const VirtualActiveCreate = lazy(
  () =>
    import('../../../components/financal-innovation/virtual-active/VirtualActiveCreate'),
);

export const VirtualActive = [
  {
    id: 'VirtualActive-show',
    route: '/financial-innovation/VirtualActive',
    component: <VirtualActiveShow />,
  },
  {
    id: 'VirtualActive-create',
    route: '/financial-innovation/VirtualActive/create',
    component: <VirtualActiveCreate />,
  },
];
