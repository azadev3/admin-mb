import { lazy } from 'react';

const RateCreate = lazy(() => import('../components/rate/RateCreate'));
const RateEdit = lazy(() => import('../components/rate/RateEdit'));
const RateShow = lazy(() => import('../components/rate/RateShow'));

export const RateRoutes = [
  { id: 'Rate-show', route: '/valyuta-indeksleri', component: <RateShow /> },
  { id: 'Rate-create', route: '/valyuta-indeksleri/create', component: <RateCreate /> },
  { id: 'Rate-edit', route: '/valyuta-indeksleri/edit/:id', component: <RateEdit /> },
];
