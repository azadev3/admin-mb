import { lazy } from 'react';

const RoadmapSustainableFinanceShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/roadmap-suist-finance/RoadmapSustainableFinanceShow'
    ),
);
const RoadmapSustainableFinanceCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/roadmap-suist-finance/RoadmapSustainableFinanceCreate'
    ),
);

export const RoadmapSustainableFinance = [
  {
    id: 'RoadmapSustainableFinance-show',
    route: '/financial-stability/RoadmapSustainableFinance',
    component: <RoadmapSustainableFinanceShow />,
  },
  {
    id: 'RoadmapSustainableFinance-create',
    route: '/financial-stability/RoadmapSustainableFinance/create',
    component: <RoadmapSustainableFinanceCreate />,
  },
];
