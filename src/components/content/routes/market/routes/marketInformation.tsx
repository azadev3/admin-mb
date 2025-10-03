import { lazy } from 'react';

const MarketInformationCreate = lazy(
  () =>
    import(
      '../../../../content/components/market/market-information/MarketInformationCreate'
    ),
);
const MarketInformationShow = lazy(
  () =>
    import(
      '../../../../content/components/market/market-information/MarketInformationShow'
    ),
);

const MarketInformationEdit = lazy(
  () =>
    import(
      '../../../../content/components/market/market-information/MarketInformationEdit'
    ),
);

export const MarketInformationsRoutes = [
  {
    id: 'MarketInformation-show',
    route: '/market-information',
    component: <MarketInformationShow />,
  },
  {
    id: 'MarketInformation-create',
    route: '/market-information/create',
    component: <MarketInformationCreate />,
  },
  {
    id: 'MarketInformation-edit',
    route: '/market-information/edit/:id',
    component: <MarketInformationEdit />,
  },
];
