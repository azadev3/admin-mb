import { lazy } from 'react';

// captions
const StatisticaCaptionCreate = lazy(
  () =>
    import('../../components/statistical/statistica-captions/StatisticaCaptionsCreate'),
);
const StatisticaCaptionShow = lazy(
  () => import('../../components/statistical/statistica-captions/StatisticaCaptionsShow'),
);
// bulleten
const BulletenCreate = lazy(
  () => import('../../components/statistical/bulleten/BulletenCreate'),
);
const BulletenEdit = lazy(
  () => import('../../components/statistical/bulleten/BulletenEdit'),
);
const BulletenShow = lazy(
  () => import('../../components/statistical/bulleten/BulletenShow'),
);
// report - titles
const ReportTitlesCreate = lazy(
  () => import('../../components/statistical/statistica-reports/ReportTitlesCreate'),
);
const ReportTitlesEdit = lazy(
  () => import('../../components/statistical/statistica-reports/ReportTitlesEdit'),
);
const ReportTitlesShow = lazy(
  () => import('../../components/statistical/statistica-reports/ReportTitlesShow'),
);
// report - files and values
const ReportFilesCreate = lazy(
  () => import('../../components/statistical/statistica-reports-files/ReportFileCreate'),
);
const ReportFilesEdit = lazy(
  () => import('../../components/statistical/statistica-reports-files/ReportFileEdit'),
);
const ReportFilesShow = lazy(
  () => import('../../components/statistical/statistica-reports-files/ReportFileShow'),
);
// revision policies
const RevisionPolicyCreate = lazy(
  () => import('../../components/statistical/policy/PolicyCreate'),
);
const RevisionPolicyShow = lazy(
  () => import('../../components/statistical/policy/PolicyShow'),
);
// methodology
const MethodologyCreate = lazy(
  () => import('../../components/statistical/methodology/MethodologyCreate'),
);
const MethodologyEdit = lazy(
  () => import('../../components/statistical/methodology/MethodologyEdit'),
);
const MethodologyShow = lazy(
  () => import('../../components/statistical/methodology/MethodologyShow'),
);

export const statisticalRoutes = [
  // captions
  {
    id: 'statistika-captions-show',
    route: '/statistika-captions',
    component: <StatisticaCaptionShow />,
  },
  {
    id: 'statistika-captions-create',
    route: '/statistika-captions/create',
    component: <StatisticaCaptionCreate />,
  },
  // bulleten
  {
    id: 'bulleten-create',
    route: '/statistika-bulleten/create',
    component: <BulletenCreate />,
  },
  {
    id: 'bulleten-edit',
    route: '/statistika-bulleten/edit/:id',
    component: <BulletenEdit />,
  },
  {
    id: 'bulleten-show',
    route: '/statistika-bulleten',
    component: <BulletenShow />,
  },
  // report - titles
  {
    id: 'report-titles-create',
    route: '/report-titles/create',
    component: <ReportTitlesCreate />,
  },
  {
    id: 'report-titles-edit',
    route: '/report-titles/edit/:id',
    component: <ReportTitlesEdit />,
  },
  {
    id: 'report-titles-show',
    route: '/report-titles',
    component: <ReportTitlesShow />,
  },
  // report - files and values
  {
    id: 'report-file-create',
    route: '/report-file/create',
    component: <ReportFilesCreate />,
  },
  {
    id: 'report-file-edit',
    route: '/report-file/edit/:id',
    component: <ReportFilesEdit />,
  },
  {
    id: 'report-file-show',
    route: '/report-file',
    component: <ReportFilesShow />,
  },
  // revision policies
  {
    id: 'revisionpolicy-create',
    route: '/revisionpolicy/create',
    component: <RevisionPolicyCreate />,
  },
  {
    id: 'revisionpolicy-show',
    route: '/revisionpolicy',
    component: <RevisionPolicyShow />,
  },
  // methodology
  {
    id: 'methodology-create',
    route: '/methodology/create',
    component: <MethodologyCreate />,
  },
  {
    id: 'methodology-edit',
    route: '/methodology/edit/:id',
    component: <MethodologyEdit />,
  },
  {
    id: 'methodology-show',
    route: '/methodology',
    component: <MethodologyShow />,
  },
];
