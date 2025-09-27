import { lazy } from 'react';

const AnnualReportShow = lazy(
  () => import('../../../components/publications/annual-report/AnnualReportShow'),
);
const AnnualReportCreate = lazy(
  () => import('../../../components/publications/annual-report/AnnualReportCreate'),
);
const AnnualReportEdit = lazy(
  () => import('../../../components/publications/annual-report/AnnualReportEdit'),
);

export const AnnualReport = [
  {
    id: 'AnnualReport-show',
    route: '/publications/AnnualReport',
    component: <AnnualReportShow />,
  },
  {
    id: 'AnnualReport-create',
    route: '/publications/AnnualReport/create',
    component: <AnnualReportCreate />,
  },
  {
    id: 'AnnualReport-edit',
    route: '/publications/AnnualReport/edit/:id',
    component: <AnnualReportEdit />,
  },
];
