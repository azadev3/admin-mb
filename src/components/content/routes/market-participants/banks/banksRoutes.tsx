import { lazy } from 'react';

// captions
const BanksCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/banks/bank-captions/BanksCaptionsCreate'
    ),
);
const BanksCaptionsShow = lazy(
  () =>
    import(
      '../../../components/market-participants/banks/bank-captions/BanksCaptionsShow'
    ),
);
// files and values
const BanksFilesCreate = lazy(
  () =>
    import('../../../components/market-participants/banks/bank-files/BanksFilesCreate'),
);
const BanksFilesEdit = lazy(
  () => import('../../../components/market-participants/banks/bank-files/BanksFilesEdit'),
);
const BanksFilesShow = lazy(
  () => import('../../../components/market-participants/banks/bank-files/BanksFilesShow'),
);
// banks
const BanksCreate = lazy(
  () => import('../../../components/market-participants/banks/bank/BanksCreate'),
);
const BanksEdit = lazy(
  () => import('../../../components/market-participants/banks/bank/BanksEdit'),
);
const BanksShow = lazy(
  () => import('../../../components/market-participants/banks/bank/BanksShow'),
);
// operator captions
const OperatorCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/banks/operators/operator-captions/OperatorCaptionsCreate'
    ),
);
const OperatorCaptionsShow = lazy(
  () =>
    import(
      '../../../components/market-participants/banks/operators/operator-captions/OperatorCaptionsShow'
    ),
);
// operator / banks
const OperatorBanksCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/banks/operators/operator-bank/OperatorBanksCreate'
    ),
);
const OperatorBanksEdit = lazy(
  () =>
    import(
      '../../../components/market-participants/banks/operators/operator-bank/OperatorBanksEdit'
    ),
);
const OperatorBanksShow = lazy(
  () =>
    import(
      '../../../components/market-participants/banks/operators/operator-bank/OperatorBanksShow'
    ),
);

export const banksRoutes = [
  // captions
  {
    id: 'banks-captions-show',
    route: '/market-participants/banks/captions',
    component: <BanksCaptionsShow />,
  },
  {
    id: 'banks-captions-create',
    route: '/market-participants/banks/captions/create',
    component: <BanksCaptionsCreate />,
  },
  //   files and values
  {
    id: 'banks-files-show',
    route: '/market-participants/banks/files',
    component: <BanksFilesShow />,
  },
  {
    id: 'banks-files-create',
    route: '/market-participants/banks/files/create',
    component: <BanksFilesCreate />,
  },
  {
    id: 'banks-files-create',
    route: '/market-participants/banks/files/edit/:id',
    component: <BanksFilesEdit />,
  },
  //   banks
  {
    id: 'banks-show',
    route: '/market-participants/banks/bank',
    component: <BanksShow />,
  },
  {
    id: 'banks-create',
    route: '/market-participants/banks/bank/create',
    component: <BanksCreate />,
  },
  {
    id: 'banks-create',
    route: '/market-participants/banks/bank/edit/:id',
    component: <BanksEdit />,
  },
  // operator captions
  {
    id: 'banks-operators-captions-show',
    route: '/market-participants/banks/operator/captions',
    component: <OperatorCaptionsShow />,
  },
  {
    id: 'banks-operator-captions-create',
    route: '/market-participants/banks/operator/captions/create',
    component: <OperatorCaptionsCreate />,
  },
  //  operator banks
  {
    id: 'operator-banks-show',
    route: '/market-participants/banks/operator/bank',
    component: <OperatorBanksShow />,
  },
  {
    id: 'operator-banks-create',
    route: '/market-participants/banks/operator/bank/create',
    component: <OperatorBanksCreate />,
  },
  {
    id: 'operator-banks-create',
    route: '/market-participants/banks/operator/bank/edit/:id',
    component: <OperatorBanksEdit />,
  },
];
