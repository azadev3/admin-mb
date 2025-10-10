import { lazy } from 'react';

const CarierDepartmentShow = lazy(
  () => import('../../../components/carier/department/DepartmentShow'),
);
const CarierDepartmentCreate = lazy(
  () => import('../../../components/carier/department/DepartmentCreate'),
);
const CarierDepartmentEdit = lazy(
  () => import('../../../components/carier/department/DepartmentEdit'),
);

export const CarierDepartment = [
  {
    id: 'carier-department-show',
    route: '/carier/department',
    component: <CarierDepartmentShow />,
  },
  {
    id: 'carier-department-create',
    route: '/carier/department/create',
    component: <CarierDepartmentCreate />,
  },
  {
    id: 'carier-department-edit',
    route: '/carier/department/edit/:id',
    component: <CarierDepartmentEdit />,
  },
];
