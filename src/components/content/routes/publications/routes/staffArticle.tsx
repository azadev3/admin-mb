import { lazy } from 'react';

const StaffArticleShow = lazy(
  () => import('../../../components/publications/staff-article/StaffArticleShow'),
);
const StaffArticleCreate = lazy(
  () => import('../../../components/publications/staff-article/StaffArticleCreate'),
);
const StaffArticleEdit = lazy(
  () => import('../../../components/publications/staff-article/StaffArticleEdit'),
);

export const StaffArticle = [
  {
    id: 'StaffArticle-show',
    route: '/publications/StaffArticle',
    component: <StaffArticleShow />,
  },
  {
    id: 'StaffArticle-create',
    route: '/publications/StaffArticle/create',
    component: <StaffArticleCreate />,
  },
  {
    id: 'StaffArticle-edit',
    route: '/publications/StaffArticle/edit/:id',
    component: <StaffArticleEdit />,
  },
];
