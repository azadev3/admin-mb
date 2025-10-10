import { lazy } from 'react';

const InternDirectionsShow = lazy(
  () =>
    import(
      '../../../components/carier/internships/internships-directions/DirectionsShow'
    ),
);
const InternDirectionsCreate = lazy(
  () =>
    import(
      '../../../components/carier/internships/internships-directions/DirectionsCreate'
    ),
);
const InternDirectionsEdit = lazy(
  () =>
    import(
      '../../../components/carier/internships/internships-directions/DirectionsEdit'
    ),
);

export const InternDirections = [
  {
    id: 'carier-directions-show',
    route: '/carier/intern/directions',
    component: <InternDirectionsShow />,
  },
  {
    id: 'carier-directions-create',
    route: '/carier/intern/directions/create',
    component: <InternDirectionsCreate />,
  },
  {
    id: 'carier-directions-edit',
    route: '/carier/intern/directions/edit/:id',
    component: <InternDirectionsEdit />,
  },
];
