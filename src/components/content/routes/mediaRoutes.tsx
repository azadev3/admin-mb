import ImagesCreate from '../components/media/images/ImagesCreate';
import ImagesEdit from '../components/media/images/ImagesEdit';
import ImagesShow from '../components/media/images/ImagesShow';
import VideosCreate from '../components/media/videos/VideosCreate';
import VideosEdit from '../components/media/videos/VideosEdit';
import VideosShow from '../components/media/videos/VideosShow';

export const mediaRoutes = [
  // images
  { id: 'images-show', route: '/sekiller', component: <ImagesShow /> },
  { id: 'images-create', route: '/sekiller/create', component: <ImagesCreate /> },
  { id: 'images-edit', route: '/sekiller/edit/:id', component: <ImagesEdit /> },
  // videos
  { id: 'videos-show', route: '/videolar', component: <VideosShow /> },
  { id: 'videos-create', route: '/videolar/create', component: <VideosCreate /> },
  { id: 'videos-edit', route: '/videolar/edit/:id', component: <VideosEdit /> },
];
