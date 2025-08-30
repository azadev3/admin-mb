import { lazy } from 'react';

const AdvertisementCreate = lazy(() => import('../components/advertisements/AdvertisementCreate'));
const AdvertisementEdit = lazy(() => import('../components/advertisements/AdvertisementEdit'));
const AdvertisementShow = lazy(() => import('../components/advertisements/AdvertisementShow'));

export const advertisementRoutes = [
  { id: 'advertisement-show', route: '/elanlar', component: <AdvertisementShow /> },
  { id: 'advertisement-create', route: '/elanlar/create', component: <AdvertisementCreate /> },
  { id: 'advertisement-edit', route: '/elanlar/edit/:id', component: <AdvertisementEdit /> },
];
