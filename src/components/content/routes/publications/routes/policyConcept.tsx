import { lazy } from 'react';

const PolicyConceptShow = lazy(
  () => import('../../../components/publications/policy-concept/PolicyConceptShow'),
);
const PolicyConceptCreate = lazy(
  () => import('../../../components/publications/policy-concept/PolicyConceptCreate'),
);
const PolicyConceptEdit = lazy(
  () => import('../../../components/publications/policy-concept/PolicyConceptEdit'),
);

export const PolicyConcept = [
  {
    id: 'PolicyConcept-show',
    route: '/publications/PolicyConcept',
    component: <PolicyConceptShow />,
  },
  {
    id: 'PolicyConcept-create',
    route: '/publications/PolicyConcept/create',
    component: <PolicyConceptCreate />,
  },
  {
    id: 'PolicyConcept-edit',
    route: '/publications/PolicyConcept/edit/:id',
    component: <PolicyConceptEdit />,
  },
];
