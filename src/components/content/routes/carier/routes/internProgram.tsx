import { lazy } from 'react';

const InternProgramShow = lazy(
  () => import('../../../components/carier/internships/internships-program/ProgramShow'),
);
const InternProgramCreate = lazy(
  () =>
    import('../../../components/carier/internships/internships-program/ProgramCreate'),
);
const InternProgramEdit = lazy(
  () => import('../../../components/carier/internships/internships-program/ProgramEdit'),
);

export const InternProgram = [
  {
    id: 'carier-program-show',
    route: '/carier/intern/program',
    component: <InternProgramShow />,
  },
  {
    id: 'carier-program-create',
    route: '/carier/intern/program/create',
    component: <InternProgramCreate />,
  },
  {
    id: 'carier-program-edit',
    route: '/carier/intern/program/edit/:id',
    component: <InternProgramEdit />,
  },
];
