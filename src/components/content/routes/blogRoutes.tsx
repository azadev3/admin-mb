import { lazy } from 'react';

const BlogsCreate = lazy(() => import('../components/blogs/BlogsCreate'));
const BlogsEdit = lazy(() => import('../components/blogs/BlogsEdit'));
const BlogsShow = lazy(() => import('../components/blogs/BlogsShow'));

export const blogsRoutes = [
  { id: 'blogs-show', route: '/xeberler', component: <BlogsShow /> },
  { id: 'blogs-create', route: '/xeberler/create', component: <BlogsCreate /> },
  { id: 'blogs-edit', route: '/xeberler/edit/:id', component: <BlogsEdit /> },
];
