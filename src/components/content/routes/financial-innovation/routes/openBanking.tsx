import { lazy } from 'react';

const OpenBankingShow = lazy(
  () => import('../../../components/financal-innovation/openbanking/OpenBankingShow'),
);
const OpenBankingCreate = lazy(
  () => import('../../../components/financal-innovation/openbanking/OpenBankingCreate'),
);

export const OpenBanking = [
  {
    id: 'OpenBanking-show',
    route: '/financial-innovation/OpenBanking',
    component: <OpenBankingShow />,
  },
  {
    id: 'OpenBanking-create',
    route: '/financial-innovation/OpenBanking/create',
    component: <OpenBankingCreate />,
  },
];
