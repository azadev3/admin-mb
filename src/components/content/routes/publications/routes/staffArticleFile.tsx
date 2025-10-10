import { lazy } from 'react';

const StaffArticleFileShow = lazy(
  () =>
    import('../../../components/publications/staff-article-file/StaffArticleFileShow'),
);
const StaffArticleFileCreate = lazy(
  () =>
    import('../../../components/publications/staff-article-file/StaffArticleFileCreate'),
);
const StaffArticleFileEdit = lazy(
  () =>
    import('../../../components/publications/staff-article-file/StaffArticleFileEdit'),
);

export const StaffArticleFile = [
  {
    id: 'StaffArticleFile-show',
    route: '/publications/StaffArticleFile',
    component: <StaffArticleFileShow />,
  },
  {
    id: 'StaffArticleFile-create',
    route: '/publications/StaffArticleFile/create',
    component: <StaffArticleFileCreate />,
  },
  {
    id: 'StaffArticleFile-edit',
    route: '/publications/StaffArticleFile/edit/:id',
    component: <StaffArticleFileEdit />,
  },
];
