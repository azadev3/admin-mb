import { lazy } from 'react';

const ComplaintIndexShow = lazy(
  () => import('../../../components/customer-rights/complaint-index/ComplaintIndexShow'),
);
const ComplaintIndexCreate = lazy(
  () =>
    import('../../../components/customer-rights/complaint-index/ComplaintIndexCreate'),
);

const ComplaintIndexEdit = lazy(
  () => import('../../../components/customer-rights/complaint-index/ComplaintIndexEdit'),
);

export const ComplaintIndex = [
  {
    id: 'customer-rights-ComplaintIndex-show',
    route: '/customer-rights/complaint-index/complaintindex',
    component: <ComplaintIndexShow />,
  },
  {
    id: 'customer-rights-ComplaintIndex-create',
    route: '/customer-rights/complaint-index/complaintindex/create',
    component: <ComplaintIndexCreate />,
  },
  {
    id: 'customer-rights-ComplaintIndex-create',
    route: '/customer-rights/complaint-index/complaintindex/edit/:id',
    component: <ComplaintIndexEdit />,
  },
];
