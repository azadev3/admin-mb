import MacroDocumentCreate from '../components/macro-document/MacroDocumentCreate';
import MacroDocumentEdit from '../components/macro-document/MacroDocumentEdit';
import MacroDocumentShow from '../components/macro-document/MacroDocumentShow';

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
