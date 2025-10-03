import { lazy } from 'react';

const TechnicalDocumentShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/technical-document/TechnicalDocumentShow'
    ),
);
const TechnicalDocumentCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/technical-document/TechnicalDocumentCreate'
    ),
);
const TechnicalDocumentEdit = lazy(
  () =>
    import(
      '../../../components/payment-systems/technical-document/TechnicalDocumentEdit'
    ),
);

export const TechnicalDocument = [
  {
    id: 'TechnicalDocument-show',
    route: '/payment-systems/TechnicalDocument',
    component: <TechnicalDocumentShow />,
  },
  {
    id: 'TechnicalDocument-create',
    route: '/payment-systems/TechnicalDocument/create',
    component: <TechnicalDocumentCreate />,
  },
  {
    id: 'TechnicalDocument-create',
    route: '/payment-systems/TechnicalDocument/edit/:id',
    component: <TechnicalDocumentEdit />,
  },
];
