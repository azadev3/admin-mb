import { lazy } from 'react';

const MarketDegreeCreate = lazy(
  () =>
    import(
      '../../../../content/components/market/market-percent-degree/MarketDegreeCreate'
    ),
);
const MarketDegreeShow = lazy(
  () =>
    import(
      '../../../../content/components/market/market-percent-degree/MarketDegreeShow'
    ),
);

const MarketDegreeEdit = lazy(
  () =>
    import(
      '../../../../content/components/market/market-percent-degree/MarketDegreeEdit'
    ),
);

export const MarketDegreesRoutes = [
  {
    id: 'MarketDegree-show',
    route: '/market-degree',
    component: <MarketDegreeShow />,
  },
  {
    id: 'MarketDegree-create',
    route: '/market-degree/create',
    component: <MarketDegreeCreate />,
  },
  {
    id: 'MarketDegree-edit',
    route: '/market-degree/edit/:id',
    component: <MarketDegreeEdit />,
  },
];
