import { lazy } from 'react';

const ComplaintIndexCategoryShow = lazy(
  () =>
    import('../../../components/customer-rights/complaint-index-category/CategoryShow'),
);
const ComplaintIndexCategoryCreate = lazy(
  () =>
    import('../../../components/customer-rights/complaint-index-category/CategoryCreate'),
);

const ComplaintIndexCategoryEdit = lazy(
  () =>
    import('../../../components/customer-rights/complaint-index-category/CategoryEdit'),
);

export const ComplaintIndexCategory = [
  {
    id: 'customer-rights-ComplaintIndexCategory-show',
    route: '/customer-rights/complaint-index/category',
    component: <ComplaintIndexCategoryShow />,
  },
  {
    id: 'customer-rights-ComplaintIndexCategory-create',
    route: '/customer-rights/complaint-index/category/create',
    component: <ComplaintIndexCategoryCreate />,
  },
  {
    id: 'customer-rights-ComplaintIndexCategory-create',
    route: '/customer-rights/complaint-index/category/edit/:id',
    component: <ComplaintIndexCategoryEdit />,
  },
];
