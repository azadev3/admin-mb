import { lazy } from 'react';

const MacroDocumentCreate = lazy(() => import('../components/macro-document/MacroDocumentCreate'));
const MacroDocumentEdit = lazy(() => import('../components/macro-document/MacroDocumentEdit'));
const MacroDocumentShow = lazy(() => import('../components/macro-document/MacroDocumentShow'));

export const macroDocumentRoutes = [
  {
    id: 'mc-show',
    route: '/makroiqtisadi-senedler-ve-hesabatlar',
    component: <MacroDocumentShow />,
  },
  {
    id: 'mc-create',
    route: '/makroiqtisadi-senedler-ve-hesabatlar/create',
    component: <MacroDocumentCreate />,
  },
  {
    id: 'mc-edit',
    route: '/makroiqtisadi-senedler-ve-hesabatlar/edit/:id',
    component: <MacroDocumentEdit />,
  },
];
