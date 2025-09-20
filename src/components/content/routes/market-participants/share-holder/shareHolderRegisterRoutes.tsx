import { lazy } from 'react';

// captions
const ShareholderCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/share-holder/ShareholderCaptionsCreate'
    ),
);
const ShareholderCaptionsShow = lazy(
  () =>
    import(
      '../../../components/market-participants/share-holder/ShareholderCaptionsShow'
    ),
);

export const shareHolderRegisterRoutes = [
  {
    id: 'shareholder-captions-show',
    route: '/market-participants/share-holder/captions',
    component: <ShareholderCaptionsShow />,
  },
  {
    id: 'shareholder-captions-create',
    route: '/market-participants/share-holder/captions/create',
    component: <ShareholderCaptionsCreate />,
  },
];
