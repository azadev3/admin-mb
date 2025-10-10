import { lazy } from 'react';

const RoadmapOverviewShow = lazy(
  () => import('../../../components/publications/roadmap-overview/RoadmapOverviewShow'),
);
const RoadmapOverviewCreate = lazy(
  () => import('../../../components/publications/roadmap-overview/RoadmapOverviewCreate'),
);
const RoadmapOverviewEdit = lazy(
  () => import('../../../components/publications/roadmap-overview/RoadmapOverviewEdit'),
);

export const RoadmapOverview = [
  {
    id: 'RoadmapOverview-show',
    route: '/publications/RoadmapOverview',
    component: <RoadmapOverviewShow />,
  },
  {
    id: 'RoadmapOverview-create',
    route: '/publications/RoadmapOverview/create',
    component: <RoadmapOverviewCreate />,
  },
  {
    id: 'RoadmapOverview-edit',
    route: '/publications/RoadmapOverview/edit/:id',
    component: <RoadmapOverviewEdit />,
  },
];
