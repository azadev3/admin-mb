import { lazy } from 'react';

const CitizenCategoryShow = lazy(
  () =>
    import(
      '../../../components/customer-rights/citizen-application-category/CategoryShow'
    ),
);
const CitizenCategoryCreate = lazy(
  () =>
    import(
      '../../../components/customer-rights/citizen-application-category/CategoryCreate'
    ),
);

const CitizenCategoryEdit = lazy(
  () =>
    import(
      '../../../components/customer-rights/citizen-application-category/CategoryEdit'
    ),
);

export const CitizenCategory = [
  {
    id: 'customer-rights-citizencategory-show',
    route: '/customer-rights/citizencategory',
    component: <CitizenCategoryShow />,
  },
  {
    id: 'customer-rights-citizencategory-create',
    route: '/customer-rights/citizencategory/create',
    component: <CitizenCategoryCreate />,
  },
  {
    id: 'customer-rights-citizencategory-create',
    route: '/customer-rights/citizencategory/edit/:id',
    component: <CitizenCategoryEdit />,
  },
];
