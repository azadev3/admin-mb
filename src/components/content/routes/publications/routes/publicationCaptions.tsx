import { lazy } from 'react';

const PublicationCaptionShow = lazy(
  () => import('../../../components/publications/captions/PublicationCaptionShow'),
);
const PublicationCaptionCreate = lazy(
  () => import('../../../components/publications/captions/PublicationCaptionCreate'),
);

export const PublicationCaption = [
  {
    id: 'PublicationCaption-show',
    route: '/publications/PublicationCaption',
    component: <PublicationCaptionShow />,
  },
  {
    id: 'PublicationCaption-create',
    route: '/publications/PublicationCaption/create',
    component: <PublicationCaptionCreate />,
  },
];
