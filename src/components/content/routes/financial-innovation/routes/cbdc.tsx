import { lazy } from 'react';

const CBDCShow = lazy(
  () => import('../../../components/financal-innovation/cbdc/CBDCShow'),
);
const CBDCCreate = lazy(
  () => import('../../../components/financal-innovation/cbdc/CBDCCreate'),
);

export const Cbdc = [
  {
    id: 'CBDC-show',
    route: '/financial-innovation/CBDC',
    component: <CBDCShow />,
  },
  {
    id: 'CBDC-create',
    route: '/financial-innovation/CBDC/create',
    component: <CBDCCreate />,
  },
];
