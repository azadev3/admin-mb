import { lazy } from 'react';

const CybersecurityStrategyShow = lazy(
  () =>
    import(
      '../../../components/publications/cybersecurity-strategy/CybersecurityStrategyShow'
    ),
);
const CybersecurityStrategyCreate = lazy(
  () =>
    import(
      '../../../components/publications/cybersecurity-strategy/CybersecurityStrategyCreate'
    ),
);
const CybersecurityStrategyEdit = lazy(
  () =>
    import(
      '../../../components/publications/cybersecurity-strategy/CybersecurityStrategyEdit'
    ),
);

export const CybersecurityStrategy = [
  {
    id: 'CybersecurityStrategy-show',
    route: '/publications/CybersecurityStrategy',
    component: <CybersecurityStrategyShow />,
  },
  {
    id: 'CybersecurityStrategy-create',
    route: '/publications/CybersecurityStrategy/create',
    component: <CybersecurityStrategyCreate />,
  },
  {
    id: 'CybersecurityStrategy-edit',
    route: '/publications/CybersecurityStrategy/edit/:id',
    component: <CybersecurityStrategyEdit />,
  },
];
