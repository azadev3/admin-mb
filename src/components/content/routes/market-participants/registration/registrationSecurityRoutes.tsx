import { lazy } from 'react';

// captions
const RegisterCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/registrations/RegistrationsCaptionsCreate'
    ),
);
const RegisterCaptionsShow = lazy(
  () =>
    import(
      '../../../components/market-participants/registrations/RegistrationsCaptionsShow'
    ),
);
// descriptions
const RegisterCreate = lazy(
  () =>
    import('../../../components/market-participants/registrations/RegistrationsCreate'),
);
const RegisterEdit = lazy(
  () => import('../../../components/market-participants/registrations/RegistrationsEdit'),
);
const RegisterShow = lazy(
  () => import('../../../components/market-participants/registrations/RegistrationsShow'),
);

export const registrationSecurityRoutes = [
  // captions
  {
    id: 'registration-captions-show',
    route: '/market-participants/banks/register/captions',
    component: <RegisterCaptionsShow />,
  },
  {
    id: 'registration-captions-create',
    route: '/market-participants/banks/register/captions/create',
    component: <RegisterCaptionsCreate />,
  },
  // descriptions
  {
    id: 'registration-show',
    route: '/market-participants/banks/register/descriptions',
    component: <RegisterShow />,
  },
  {
    id: 'registration-create',
    route: '/market-participants/banks/register/descriptions/create',
    component: <RegisterCreate />,
  },
  {
    id: 'registration-edit',
    route: '/market-participants/banks/register/descriptions/edit/:id',
    component: <RegisterEdit />,
  },
];
