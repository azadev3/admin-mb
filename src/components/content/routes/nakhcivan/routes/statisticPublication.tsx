import { lazy } from 'react';

const StatisticalPublicationShow = lazy(
  () =>
    import(
      '../../../components/nakhcivan/statistical-publication/StatisticalPublicationShow'
    ),
);
const StatisticalPublicationCreate = lazy(
  () =>
    import(
      '../../../components/nakhcivan/statistical-publication/StatisticalPublicationCreate'
    ),
);
const StatisticalPublicationEdit = lazy(
  () =>
    import(
      '../../../components/nakhcivan/statistical-publication/StatisticalPublicationEdit'
    ),
);

export const StatisticalPublication = [
  {
    id: 'carier-publication-show',
    route: '/nakhcivan/statistical-publication',
    component: <StatisticalPublicationShow />,
  },
  {
    id: 'carier-publication-create',
    route: '/nakhcivan/statistical-publication/create',
    component: <StatisticalPublicationCreate />,
  },
  {
    id: 'carier-publication-edit',
    route: '/nakhcivan/statistical-publication/edit/:id',
    component: <StatisticalPublicationEdit />,
  },
];
