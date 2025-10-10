import { lazy } from 'react';

const VirtualEducationShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/virtualeducation/VirtualEducationShow'
    ),
);
const VirtualEducationCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/virtualeducation/VirtualEducationCreate'
    ),
);
const VirtualEducationEdit = lazy(
  () =>
    import(
      '../../../components/financial-literacy/virtualeducation/VirtualEducationEdit'
    ),
);

export const VirtualEducation = [
  {
    id: 'VirtualEducation-show',
    route: '/financial-literacy/VirtualEducation',
    component: <VirtualEducationShow />,
  },
  {
    id: 'VirtualEducation-create',
    route: '/financial-literacy/VirtualEducation/create',
    component: <VirtualEducationCreate />,
  },
  {
    id: 'VirtualEducation-edit',
    route: '/financial-literacy/VirtualEducation/edit/:id',
    component: <VirtualEducationEdit />,
  },
];
