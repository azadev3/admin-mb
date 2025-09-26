import { lazy } from 'react';

const NominationCategoryShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/nomination-category/NominationCategoryShow'
    ),
);
const NominationCategoryCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/nomination-category/NominationCategoryCreate'
    ),
);
const NominationCategoryEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/nomination-category/NominationCategoryEdit'
    ),
);

export const NominationCategory = [
  {
    id: 'NominationCategory-show',
    route: '/payment-systems/NominationCategory',
    component: <NominationCategoryShow />,
  },
  {
    id: 'NominationCategory-create',
    route: '/payment-systems/NominationCategory/create',
    component: <NominationCategoryCreate />,
  },
  {
    id: 'NominationCategory-create',
    route: '/payment-systems/NominationCategory/edit/:id',
    component: <NominationCategoryEdit />,
  },
];
