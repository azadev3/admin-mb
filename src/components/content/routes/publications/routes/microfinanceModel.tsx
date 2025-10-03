import { lazy } from 'react';

const MicrofinanceModelShow = lazy(
  () =>
    import('../../../components/publications/microfinance-model/MicrofinanceModelShow'),
);
const MicrofinanceModelCreate = lazy(
  () =>
    import('../../../components/publications/microfinance-model/MicrofinanceModelCreate'),
);
const MicrofinanceModelEdit = lazy(
  () =>
    import('../../../components/publications/microfinance-model/MicrofinanceModelEdit'),
);

export const MicrofinanceModel = [
  {
    id: 'MicrofinanceModel-show',
    route: '/publications/MicrofinanceModel',
    component: <MicrofinanceModelShow />,
  },
  {
    id: 'MicrofinanceModel-create',
    route: '/publications/MicrofinanceModel/create',
    component: <MicrofinanceModelCreate />,
  },
  {
    id: 'MicrofinanceModel-edit',
    route: '/publications/MicrofinanceModel/edit/:id',
    component: <MicrofinanceModelEdit />,
  },
];
