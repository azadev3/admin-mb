// Fokus - Xeberler - Elanlar - Musahibeler ve Cixislar
import FocusCreate from '../components/focus/FocusCreate';
import FocusEdit from '../components/focus/FocusEdit';
import FocusShow from '../components/focus/FocusShow';

export const focusRoutes = [
  { id: 'focus-show', route: '/fokus', component: <FocusShow /> },
  { id: 'focus-create', route: '/fokus/create', component: <FocusCreate /> },
  { id: 'focus-edit', route: '/fokus/edit/:id', component: <FocusEdit /> },
];
