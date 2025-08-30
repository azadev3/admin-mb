import { lazy } from 'react';

const PercentCategoryCreate = lazy(
  () =>
    import(
      '../components/percent-corridor/percent_captions/PercentCategoryCreate'
    ),
);
const PercentCategoryEdit = lazy(
  () =>
    import(
      '../components/percent-corridor/percent_captions/PercentCategoryEdit'
    ),
);
const PercentCategoryShow = lazy(
  () =>
    import(
      '../components/percent-corridor/percent_captions/PercentCategoryShow'
    ),
);

const PercentValuesCreate = lazy(
  () =>
    import('../components/percent-corridor/percent_values/PercentValuesCreate'),
);
const PercentValuesEdit = lazy(
  () =>
    import('../components/percent-corridor/percent_values/PercentValuesEdit'),
);
const PercentValuesShow = lazy(
  () =>
    import('../components/percent-corridor/percent_values/PercentValuesShow'),
);

export const percentCorridorRoutes = [
  // captions
  {
    id: 'percent-corridor-captions-show',
    route: '/faiz-dehlizi-captions',
    component: <PercentCategoryShow />,
  },
  {
    id: 'percent-corridor-captions-create',
    route: '/faiz-dehlizi-captions/create',
    component: <PercentCategoryCreate />,
  },
  {
    id: 'percent-corridor-captions-edit',
    route: '/faiz-dehlizi-captions/edit/:id',
    component: <PercentCategoryEdit />,
  },
  // values
  {
    id: 'percent-corridor-values-show',
    route: '/faiz-dehlizi-values',
    component: <PercentValuesShow />,
  },
  {
    id: 'percent-corridor-values-create',
    route: '/faiz-dehlizi-values/create',
    component: <PercentValuesCreate />,
  },
  {
    id: 'percent-corridor-values-edit',
    route: '/faiz-dehlizi-values/edit/:id',
    component: <PercentValuesEdit />,
  },
];
