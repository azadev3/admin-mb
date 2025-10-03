import { lazy } from 'react';

const StaffArticleCaptionShow = lazy(
  () =>
    import(
      '../../../components/publications/staff-article-caption/StaffArticleCaptionShow'
    ),
);
const StaffArticleCaptionCreate = lazy(
  () =>
    import(
      '../../../components/publications/staff-article-caption/StaffArticleCaptionCreate'
    ),
);

export const StaffArticleCaption = [
  {
    id: 'StaffArticleCaption-show',
    route: '/publications/StaffArticleCaption',
    component: <StaffArticleCaptionShow />,
  },
  {
    id: 'StaffArticleCaption-create',
    route: '/publications/StaffArticleCaption/create',
    component: <StaffArticleCaptionCreate />,
  },
];
