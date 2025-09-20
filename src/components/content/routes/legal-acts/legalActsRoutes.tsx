import { lazy } from 'react';

const LegalActCreate = lazy(() => import('../../components/legal-act/LegalActCreate'));
const LegalActEdit = lazy(() => import('../../components/legal-act/LegalActEdit'));
const LegalActShow = lazy(() => import('../../components/legal-act/LegalActShow'));

export const legalActsRoutes = [
  { id: 'legalact-show', route: '/legalact', component: <LegalActShow /> },
  {
    id: 'legalact-create',
    route: '/legalact/create',
    component: <LegalActCreate />,
  },
  {
    id: 'legalact-edit',
    route: '/legalact/edit/:id',
    component: <LegalActEdit />,
  },
];
