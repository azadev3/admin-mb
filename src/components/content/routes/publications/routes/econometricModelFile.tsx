import { lazy } from 'react';

const EconometricModelFileShow = lazy(
  () =>
    import(
      '../../../components/publications/econometric-model-file/EconometricModelFileShow'
    ),
);
const EconometricModelFileCreate = lazy(
  () =>
    import(
      '../../../components/publications/econometric-model-file/EconometricModelFileCreate'
    ),
);
const EconometricModelFileEdit = lazy(
  () =>
    import(
      '../../../components/publications/econometric-model-file/EconometricModelFileEdit'
    ),
);

export const EconometricModelFile = [
  {
    id: 'EconometricModelFile-show',
    route: '/publications/EconometricModelFile',
    component: <EconometricModelFileShow />,
  },
  {
    id: 'EconometricModelFile-create',
    route: '/publications/EconometricModelFile/create',
    component: <EconometricModelFileCreate />,
  },
  {
    id: 'EconometricModelFile-edit',
    route: '/publications/EconometricModelFile/edit/:id',
    component: <EconometricModelFileEdit />,
  },
];
