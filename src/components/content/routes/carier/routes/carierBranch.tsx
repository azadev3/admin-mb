import { lazy } from 'react';

const CarierBranchShow = lazy(
  () => import('../../../components/carier/branch/BranchShow'),
);
const CarierBranchCreate = lazy(
  () => import('../../../components/carier/branch/BranchCreate'),
);
const CarierBranchEdit = lazy(
  () => import('../../../components/carier/branch/BranchEdit'),
);

export const CarierBranch = [
  {
    id: 'carier-branch-show',
    route: '/carier/branch',
    component: <CarierBranchShow />,
  },
  {
    id: 'carier-branch-create',
    route: '/carier/branch/create',
    component: <CarierBranchCreate />,
  },
  {
    id: 'carier-branch-edit',
    route: '/carier/branch/edit/:id',
    component: <CarierBranchEdit />,
  },
];
