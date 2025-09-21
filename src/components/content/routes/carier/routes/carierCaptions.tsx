import { lazy } from 'react';

const CarierCaptionShow = lazy(
  () => import('../../../components/carier/carier-captions/CarierCaptionsShow'),
);
const CarierCaptionCreate = lazy(
  () => import('../../../components/carier/carier-captions/CarierCaptionsCreate'),
);

export const CarierCaptions = [
  {
    id: 'carier-captions-show',
    route: '/carier/captions',
    component: <CarierCaptionShow />,
  },
  {
    id: 'carier-captions-create',
    route: '/carier/captions/create',
    component: <CarierCaptionCreate />,
  },
];
