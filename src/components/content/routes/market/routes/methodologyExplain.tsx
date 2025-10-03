import { lazy } from 'react';

const MethodologyExplainCreate = lazy(
  () =>
    import(
      '../../../../content/components/market/methodologyexplain/MethodologyExplainCreate'
    ),
);
const MethodologyExplainShow = lazy(
  () =>
    import(
      '../../../../content/components/market/methodologyexplain/MethodologyExplainShow'
    ),
);

export const MethodologyExplainsRoutes = [
  {
    id: 'MethodologyExplain-show',
    route: '/methodologyexplain',
    component: <MethodologyExplainShow />,
  },
  {
    id: 'MethodologyExplain-create',
    route: '/methodologyexplain/create',
    component: <MethodologyExplainCreate />,
  },
];
