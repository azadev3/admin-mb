import { lazy } from 'react';

const NakhcivanBlogsShow = lazy(
  () => import('../../../components/nakhcivan/blog/BlogShow'),
);
const NakhcivanBlogsCreate = lazy(
  () => import('../../../components/nakhcivan/blog/BlogCreate'),
);
const NakhcivanBlogsEdit = lazy(
  () => import('../../../components/nakhcivan/blog/BlogEdit'),
);

export const NakhcivanBlogs = [
  {
    id: 'nakhcivan-blog-show',
    route: '/nakhcivan/blog',
    component: <NakhcivanBlogsShow />,
  },
  {
    id: 'nakhcivan-blog-create',
    route: '/nakhcivan/blog/create',
    component: <NakhcivanBlogsCreate />,
  },
  {
    id: 'nakhcivan-blog-edit',
    route: '/nakhcivan/blog/edit/:id',
    component: <NakhcivanBlogsEdit />,
  },
];
