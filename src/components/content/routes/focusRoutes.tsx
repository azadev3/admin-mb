import { lazy } from 'react';

// Fokus - Xeberler - Elanlar - Musahibeler ve Cixislar
const FocusCreate = lazy(() => import('../components/focus/FocusCreate'));
const FocusEdit = lazy(() => import('../components/focus/FocusEdit'));
const FocusShow = lazy(() => import('../components/focus/FocusShow'));

export const focusRoutes = [
  { id: 'focus-show', route: '/fokus', component: <FocusShow /> },
  { id: 'focus-create', route: '/fokus/create', component: <FocusCreate /> },
  { id: 'focus-edit', route: '/fokus/edit/:id', component: <FocusEdit /> },
];
