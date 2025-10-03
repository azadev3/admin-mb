import { lazy } from 'react';

const OpenBankingFileShow = lazy(
  () =>
    import(
      '../../../components/financal-innovation/openbanking-files/OpenBankingFileShow'
    ),
);
const OpenBankingFileCreate = lazy(
  () =>
    import(
      '../../../components/financal-innovation/openbanking-files/OpenBankingFileCreate'
    ),
);
const OpenBankingFileEdit = lazy(
  () =>
    import(
      '../../../components/financal-innovation/openbanking-files/OpenBankingFileEdit'
    ),
);

export const OpenBankingFile = [
  {
    id: 'OpenBankingFile-show',
    route: '/financial-innovation/OpenBankingFile',
    component: <OpenBankingFileShow />,
  },
  {
    id: 'OpenBankingFile-edit',
    route: '/financial-innovation/OpenBankingFile/edit/:id',
    component: <OpenBankingFileEdit />,
  },
  {
    id: 'OpenBankingFile-create',
    route: '/financial-innovation/OpenBankingFile/create',
    component: <OpenBankingFileCreate />,
  },
];
