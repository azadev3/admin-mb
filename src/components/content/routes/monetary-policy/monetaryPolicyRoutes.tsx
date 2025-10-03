import { lazy } from 'react';

// caption
const MonetaryPolicyCaptionsCreate = lazy(
  () => import('../../components/monetary-policy/captions/MonetaryPolicyCaptionsCreate'),
);
const MonetaryPolicyCaptionsShow = lazy(
  () => import('../../components/monetary-policy/captions/MonetaryPolicyCaptionsShow'),
);
// direction
const DirectionCreate = lazy(
  () => import('../../components/monetary-policy/direction/DirectionCreate'),
);
const DirectionShow = lazy(
  () => import('../../components/monetary-policy/direction/DirectionShow'),
);
const DirectionEdit = lazy(
  () => import('../../components/monetary-policy/direction/DirectionEdit'),
);
// decision
const DecisionCreate = lazy(
  () => import('../../components/monetary-policy/decisions/DecisionCreate'),
);
const DecisionShow = lazy(
  () => import('../../components/monetary-policy/decisions/DecisionShow'),
);
const DecisionEdit = lazy(
  () => import('../../components/monetary-policy/decisions/DecisionEdit'),
);
// review
const ReviewCreate = lazy(
  () => import('../../components/monetary-policy/review/ReviewCreate'),
);
const ReviewShow = lazy(
  () => import('../../components/monetary-policy/review/ReviewShow'),
);
const ReviewEdit = lazy(
  () => import('../../components/monetary-policy/review/ReviewEdit'),
);
// video url
const VideoCreate = lazy(
  () => import('../../components/monetary-policy/video/VideoCreate'),
);
const VideoShow = lazy(() => import('../../components/monetary-policy/video/VideoShow'));
const VideoEdit = lazy(() => import('../../components/monetary-policy/video/VideoEdit'));
// graphic
const GraphicCreate = lazy(
  () => import('../../components/monetary-policy/graphic/GraphicCreate'),
);
const GraphicShow = lazy(
  () => import('../../components/monetary-policy/graphic/GraphicShow'),
);
const GraphicEdit = lazy(
  () => import('../../components/monetary-policy/graphic/GraphicEdit'),
);
// poster
const PosterCreate = lazy(
  () => import('../../components/monetary-policy/poster/PosterCreate'),
);
const PosterShow = lazy(
  () => import('../../components/monetary-policy/poster/PosterShow'),
);
const PosterEdit = lazy(
  () => import('../../components/monetary-policy/poster/PosterEdit'),
);
// analysis - descriptions
const AnalysisCaptionsCreate = lazy(
  () => import('../../components/monetary-policy/policy-analysis/AnalysisCaptionsCreate'),
);
const AnalysisCaptionsShow = lazy(
  () => import('../../components/monetary-policy/policy-analysis/AnalysisCaptionsShow'),
);
// analysis - files
const AnalysisFilesCreate = lazy(
  () => import('../../components/monetary-policy/policy-analysis/AnalysisFileCreate'),
);
const AnalysisFilesShow = lazy(
  () => import('../../components/monetary-policy/policy-analysis/AnalysisFileShow'),
);
const AnalysisFilesEdit = lazy(
  () => import('../../components/monetary-policy/policy-analysis/AnalysisFileEdit'),
);
// MonetaryPolicyInstrument
const MonetaryPolicyInstrumentCreate = lazy(
  () => import('../../components/monetary-policy/instrument/InstrumentCreate'),
);
const MonetaryPolicyInstrumentShow = lazy(
  () => import('../../components/monetary-policy/instrument/InstrumentShow'),
);
const MonetaryPolicyInstrumentEdit = lazy(
  () => import('../../components/monetary-policy/instrument/InstrumentEdit'),
);

export const monetaryPolicyRoutes = [
  // caption
  {
    id: 'pulsiyaseti-captions',
    route: '/pul-siyaseti/captions',
    component: <MonetaryPolicyCaptionsShow />,
  },
  {
    id: 'pulsiyaseti-captions-create',
    route: '/pul-siyaseti/captions/create',
    component: <MonetaryPolicyCaptionsCreate />,
  },
  // direction
  {
    id: 'pulsiyaseti-direction',
    route: '/pul-siyaseti/direction',
    component: <DirectionShow />,
  },
  {
    id: 'pulsiyaseti-direction-create',
    route: '/pul-siyaseti/direction/create',
    component: <DirectionCreate />,
  },
  {
    id: 'pulsiyaseti-direction-edit',
    route: '/pul-siyaseti/direction/edit/:id',
    component: <DirectionEdit />,
  },
  // decisions
  {
    id: 'pulsiyaseti-decision',
    route: '/pul-siyaseti/decision',
    component: <DecisionShow />,
  },
  {
    id: 'pulsiyaseti-decision-create',
    route: '/pul-siyaseti/decision/create',
    component: <DecisionCreate />,
  },
  {
    id: 'pulsiyaseti-decision-edit',
    route: '/pul-siyaseti/decision/edit/:id',
    component: <DecisionEdit />,
  },
  // review
  {
    id: 'pulsiyaseti-review',
    route: '/pul-siyaseti/review',
    component: <ReviewShow />,
  },
  {
    id: 'pulsiyaseti-review-create',
    route: '/pul-siyaseti/review/create',
    component: <ReviewCreate />,
  },
  {
    id: 'pulsiyaseti-review-edit',
    route: '/pul-siyaseti/review/edit/:id',
    component: <ReviewEdit />,
  },
  // video
  {
    id: 'pulsiyaseti-video',
    route: '/pul-siyaseti/video',
    component: <VideoShow />,
  },
  {
    id: 'pulsiyaseti-video-create',
    route: '/pul-siyaseti/video/create',
    component: <VideoCreate />,
  },
  {
    id: 'pulsiyaseti-video-edit',
    route: '/pul-siyaseti/video/edit/:id',
    component: <VideoEdit />,
  },
  // graphic
  {
    id: 'pulsiyaseti-graphic',
    route: '/pul-siyaseti/graphic',
    component: <GraphicShow />,
  },
  {
    id: 'pulsiyaseti-graphic-create',
    route: '/pul-siyaseti/graphic/create',
    component: <GraphicCreate />,
  },
  {
    id: 'pulsiyaseti-graphic-edit',
    route: '/pul-siyaseti/graphic/edit/:id',
    component: <GraphicEdit />,
  },
  // poster
  {
    id: 'pulsiyaseti-poster',
    route: '/pul-siyaseti/poster',
    component: <PosterShow />,
  },
  {
    id: 'pulsiyaseti-poster-create',
    route: '/pul-siyaseti/poster/create',
    component: <PosterCreate />,
  },
  {
    id: 'pulsiyaseti-poster-edit',
    route: '/pul-siyaseti/poster/edit/:id',
    component: <PosterEdit />,
  },
  // analysis-descriptions
  {
    id: 'pulsiyaseti-analysis-descriptions',
    route: '/pul-siyaseti/analysis-descriptions',
    component: <AnalysisCaptionsShow />,
  },
  {
    id: 'pulsiyaseti-analysis-descriptions-create',
    route: '/pul-siyaseti/analysis-descriptions/create',
    component: <AnalysisCaptionsCreate />,
  },
  // analysis-descriptions
  {
    id: 'pulsiyaseti-analysis-files',
    route: '/pul-siyaseti/analysis-files',
    component: <AnalysisFilesShow />,
  },
  {
    id: 'pulsiyaseti-analysis-files-create',
    route: '/pul-siyaseti/analysis-files/create',
    component: <AnalysisFilesCreate />,
  },
  {
    id: 'pulsiyaseti-analysis-files-edit',
    route: '/pul-siyaseti/analysis-files/edit/:id',
    component: <AnalysisFilesEdit />,
  },
  // MonetaryPolicyInstrument
  {
    id: 'pulsiyaseti-MonetaryPolicyInstrument',
    route: '/pul-siyaseti/MonetaryPolicyInstrument',
    component: <MonetaryPolicyInstrumentShow />,
  },
  {
    id: 'pulsiyaseti-MonetaryPolicyInstrument-create',
    route: '/pul-siyaseti/MonetaryPolicyInstrument/create',
    component: <MonetaryPolicyInstrumentCreate />,
  },
  {
    id: 'pulsiyaseti-MonetaryPolicyInstrument-edit',
    route: '/pul-siyaseti/MonetaryPolicyInstrument/edit/:id',
    component: <MonetaryPolicyInstrumentEdit />,
  },
];
