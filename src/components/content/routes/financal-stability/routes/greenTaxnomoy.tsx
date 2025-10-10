import { lazy } from 'react';

const GreenTaxonomyShow = lazy(
  () => import('../../../components/financal-stability/green-taxonomy/GreenTaxonomyShow'),
);
const GreenTaxonomyCreate = lazy(
  () =>
    import('../../../components/financal-stability/green-taxonomy/GreenTaxonomyCreate'),
);

export const GreenTaxonomy = [
  {
    id: 'GreenTaxonomy-show',
    route: '/financial-stability/GreenTaxonomy',
    component: <GreenTaxonomyShow />,
  },
  {
    id: 'GreenTaxonomy-create',
    route: '/financial-stability/GreenTaxonomy/create',
    component: <GreenTaxonomyCreate />,
  },
];
