// Fokus - Xeberler - Elanlar - Musahibeler ve Cixislar
import AdvertisementCreate from '../components/advertisements/AdvertisementCreate';
import AdvertisementEdit from '../components/advertisements/AdvertisementEdit';
import AdvertisementShow from '../components/advertisements/AdvertisementShow';

export const advertisementRoutes = [
  { id: 'advertisement-show', route: '/elanlar', component: <AdvertisementShow /> },
  { id: 'advertisement-create', route: '/elanlar/create', component: <AdvertisementCreate /> },
  { id: 'advertisement-edit', route: '/elanlar/edit/:id', component: <AdvertisementEdit /> },
];
