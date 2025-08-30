import { lazy } from 'react';

const ImagesCreate = lazy(
  () => import('../components/media/images/ImagesCreate'),
);
const ImagesEdit = lazy(() => import('../components/media/images/ImagesEdit'));
const ImagesShow = lazy(() => import('../components/media/images/ImagesShow'));
const VideosCreate = lazy(
  () => import('../components/media/videos/VideosCreate'),
);
const VideosEdit = lazy(() => import('../components/media/videos/VideosEdit'));
const VideosShow = lazy(() => import('../components/media/videos/VideosShow'));

export const mediaRoutes = [
  // images
  { id: 'images-show', route: '/sekiller', component: <ImagesShow /> },
  {
    id: 'images-create',
    route: '/sekiller/create',
    component: <ImagesCreate />,
  },
  { id: 'images-edit', route: '/sekiller/edit/:id', component: <ImagesEdit /> },
  // videos
  { id: 'videos-show', route: '/videolar', component: <VideosShow /> },
  {
    id: 'videos-create',
    route: '/videolar/create',
    component: <VideosCreate />,
  },
  { id: 'videos-edit', route: '/videolar/edit/:id', component: <VideosEdit /> },
];
