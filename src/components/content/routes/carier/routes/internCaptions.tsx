import { lazy } from 'react';

const InternCaptionsShow = lazy(
  () =>
    import(
      '../../../components/carier/internships/internships-captions/InternCaptionsShow'
    ),
);
const InternCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/carier/internships/internships-captions/InterCaptionsCreate'
    ),
);

export const InternCaptions = [
  {
    id: 'carier-intern-captions-show',
    route: '/carier/intern/captions',
    component: <InternCaptionsShow />,
  },
  {
    id: 'carier-intern-captions-create',
    route: '/carier/intern/captions/create',
    component: <InternCaptionsCreate />,
  },
];
