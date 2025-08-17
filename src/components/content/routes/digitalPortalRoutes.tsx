import DigitalPortalCaptionsCreate from '../components/digitalPortal/digitalPortal_captions/DigitalPortalCaptionsCreate';
import DigitalPortalCaptionsShow from '../components/digitalPortal/digitalPortal_captions/DigitalPortalCaptionsShow';
import DigitalPortalCreate from '../components/digitalPortal/digitalPortal_cards/DigitalPortalCreate';
import DigitalPortalEdit from '../components/digitalPortal/digitalPortal_cards/DigitalPortalEdit';
import DigitalPortalShow from '../components/digitalPortal/digitalPortal_cards/DigitalPortalShow';

export const digitalPortalRoutes = [
  {
    id: 'digital-portal-texts-show',
    route: '/digital-portal-texts',
    component: <DigitalPortalCaptionsShow />,
  },
  {
    id: 'digital-portal-texts-create',
    route: '/digital-portal-texts/create',
    component: <DigitalPortalCaptionsCreate />,
  },
  {
    id: 'digital-portal-cards-show',
    route: '/digital-portal-cards',
    component: <DigitalPortalShow />,
  },
  {
    id: 'digital-portal-cards-create',
    route: '/digital-portal-cards/create',
    component: <DigitalPortalCreate />,
  },
  {
    id: 'digital-portal-cards-edit',
    route: '/digital-portal-cards/edit/:id',
    component: <DigitalPortalEdit />,
  },
];
