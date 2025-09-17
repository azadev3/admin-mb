import { lazy } from 'react';

const BankNotesCategoryShow = lazy(
  () => import('../components/bank-notes/banknotes_captions/BankNotesCategoryShow'),
);

const BankNotesCategoryCreate = lazy(
  () => import('../components/bank-notes/banknotes_captions/BankNotesCategoryCreate'),
);

const BankNotesCategoryEdit = lazy(
  () => import('../components/bank-notes/banknotes_captions/BankNotesCategoryEdit'),
);

const BankNotesShow = lazy(
  () => import('../components/bank-notes/banknotes_values/BankNotesValuesShow'),
);

const BankNotesCreate = lazy(
  () => import('../components/bank-notes/banknotes_values/BankNotesValuesCreate'),
);

const BankNotesEdit = lazy(
  () => import('../components/bank-notes/banknotes_values/BankNotesValuesEdit'),
);

export const centralBankNoteRoutes = [
  // captions
  {
    id: 'bank-notes-captions-show',
    route: '/bank-notes-captions',
    component: <BankNotesCategoryShow />,
  },
  {
    id: 'bank-notes-captions-create',
    route: '/bank-notes-captions/create',
    component: <BankNotesCategoryCreate />,
  },
  {
    id: 'bank-notes-captions-edit',
    route: '/bank-notes-captions/edit/:id',
    component: <BankNotesCategoryEdit />,
  },
  // values
  {
    id: 'bank-values-show',
    route: '/bank-notes-values',
    component: <BankNotesShow />,
  },
  {
    id: 'bank-values-create',
    route: '/bank-notes-values/create',
    component: <BankNotesCreate />,
  },
  {
    id: 'bank-values-edit',
    route: '/bank-notes-values/edit/:id',
    component: <BankNotesEdit />,
  },
];
