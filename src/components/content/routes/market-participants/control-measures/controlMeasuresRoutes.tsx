import { lazy } from 'react';

// category
const CategoryCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/control-measures/control-measures-categories/CategoryCreate'
    ),
);
const CategoryEdit = lazy(
  () =>
    import(
      '../../../components/market-participants/control-measures/control-measures-categories/CategoryEdit'
    ),
);
const CategoryShow = lazy(
  () =>
    import(
      '../../../components/market-participants/control-measures/control-measures-categories/CategoryShow'
    ),
);
// category values
const ValuesCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/control-measures/control-measures-values/ValuesCreate'
    ),
);
const ValuesEdit = lazy(
  () =>
    import(
      '../../../components/market-participants/control-measures/control-measures-values/ValuesEdit'
    ),
);
const ValuesShow = lazy(
  () =>
    import(
      '../../../components/market-participants/control-measures/control-measures-values/ValuesShow'
    ),
);

export const controlMeasuresRoutes = [
  // categories
  {
    id: 'category-show',
    route: '/market-participants/control-measure/category',
    component: <CategoryShow />,
  },
  {
    id: 'category-create',
    route: '/market-participants/control-measure/category/create',
    component: <CategoryCreate />,
  },
  {
    id: 'category-edit',
    route: '/market-participants/control-measure/category/edit/:id',
    component: <CategoryEdit />,
  },
  // category values
  {
    id: 'values-show',
    route: '/market-participants/control-measure/values',
    component: <ValuesShow />,
  },
  {
    id: 'values-create',
    route: '/market-participants/control-measure/values/create',
    component: <ValuesCreate />,
  },
  {
    id: 'values-edit',
    route: '/market-participants/control-measure/values/edit/:id',
    component: <ValuesEdit />,
  },
];
