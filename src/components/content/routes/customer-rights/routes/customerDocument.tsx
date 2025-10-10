import { lazy } from 'react';

const CustomerDocumentsShow = lazy(
  () =>
    import('../../../components/customer-rights/customer-document/CustomerDocumentShow'),
);
const CustomerDocumentsCreate = lazy(
  () =>
    import(
      '../../../components/customer-rights/customer-document/CustomerDocumentCreate'
    ),
);

const CustomerDocumentsEdit = lazy(
  () =>
    import('../../../components/customer-rights/customer-document/CustomerDocumentEdit'),
);

export const CustomerDocuments = [
  {
    id: 'customer-rights-CustomerDocuments-show',
    route: '/customer-rights/customer-document',
    component: <CustomerDocumentsShow />,
  },
  {
    id: 'customer-rights-CustomerDocuments-create',
    route: '/customer-rights/customer-document/create',
    component: <CustomerDocumentsCreate />,
  },
  {
    id: 'customer-rights-CustomerDocuments-create',
    route: '/customer-rights/customer-document/edit/:id',
    component: <CustomerDocumentsEdit />,
  },
];
