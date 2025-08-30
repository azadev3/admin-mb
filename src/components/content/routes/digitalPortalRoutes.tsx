import { lazy } from 'react';

const DigitalPortalCaptionsCreate = lazy(() => import('../components/digitalPortal/digitalPortal_captions/DigitalPortalCaptionsCreate'));
const DigitalPortalCaptionsShow = lazy(() => import('../components/digitalPortal/digitalPortal_captions/DigitalPortalCaptionsShow'));
const DigitalPortalCreate = lazy(() => import('../components/digitalPortal/digitalPortal_cards/DigitalPortalCreate'));
const DigitalPortalEdit = lazy(() => import('../components/digitalPortal/digitalPortal_cards/DigitalPortalEdit'));
const DigitalPortalShow = lazy(() => import('../components/digitalPortal/digitalPortal_cards/DigitalPortalShow'));

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
