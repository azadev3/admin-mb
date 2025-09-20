import { lazy } from 'react';

// captions
const CreditUnionsCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/credit-unions/CreditUnionCaptionsCreate'
    ),
);
const CreditUnionsCaptionsShow = lazy(
  () =>
    import(
      '../../../components/market-participants/credit-unions/CreditUnionCaptionsShow'
    ),
);
// descriptions
const CreditUnionsCreate = lazy(
  () =>
    import('../../../components/market-participants/credit-unions/CreditUnionsCreate'),
);
const CreditUnionsEdit = lazy(
  () => import('../../../components/market-participants/credit-unions/CreditUnionsEdit'),
);
const CreditUnionsShow = lazy(
  () => import('../../../components/market-participants/credit-unions/CreditUnionsShow'),
);

export const creditUnionsRoutes = [
  // captions
  {
    id: 'creditunions-captions-show',
    route: '/market-participants/banks/creditunion/captions',
    component: <CreditUnionsCaptionsShow />,
  },
  {
    id: 'crediunions-captions-create',
    route: '/market-participants/banks/creditunion/captions/create',
    component: <CreditUnionsCaptionsCreate />,
  },
  // descriptions
  {
    id: 'creditunions-show',
    route: '/market-participants/banks/creditunion/descriptions',
    component: <CreditUnionsShow />,
  },
  {
    id: 'crediunions-captions-create',
    route: '/market-participants/banks/creditunion/descriptions/create',
    component: <CreditUnionsCreate />,
  },
  {
    id: 'crediunions-captions-edit',
    route: '/market-participants/banks/creditunion/descriptions/edit/:id',
    component: <CreditUnionsEdit />,
  },
];
