import { lazy } from 'react';

// captions
const InsuranceCaptionsCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/insurance/insurance-captions/InsuranceCaptionsCreate'
    ),
);
const InsuranceCaptionsShow = lazy(
  () =>
    import(
      '../../../components/market-participants/insurance/insurance-captions/InsuranceCaptionsShow'
    ),
);
// files and values
const InsuranceFilesCreate = lazy(
  () =>
    import(
      '../../../components/market-participants/insurance/insurance-files/InsuranceFilesCreate'
    ),
);
const InsuranceFilesEdit = lazy(
  () =>
    import(
      '../../../components/market-participants/insurance/insurance-files/InsuranceFilesEdit'
    ),
);
const InsuranceFilesShow = lazy(
  () =>
    import(
      '../../../components/market-participants/insurance/insurance-files/InsuranceFilesShow'
    ),
);
// insurer
const InsurerCreate = lazy(
  () =>
    import('../../../components/market-participants/insurance/insurance/InsuranceCreate'),
);
const InsurerEdit = lazy(
  () =>
    import('../../../components/market-participants/insurance/insurance/InsuranceEdit'),
);
const InsurerShow = lazy(
  () =>
    import('../../../components/market-participants/insurance/insurance/InsuranceShow'),
);

export const insuranceRoutes = [
  // captions
  {
    id: 'insurance-captions-show',
    route: '/market-participants/insurance/captions',
    component: <InsuranceCaptionsShow />,
  },
  {
    id: 'insurance-captions-create',
    route: '/market-participants/insurance/captions/create',
    component: <InsuranceCaptionsCreate />,
  },
  //   files and values
  {
    id: 'insurance-files-show',
    route: '/market-participants/insurance/files',
    component: <InsuranceFilesShow />,
  },
  {
    id: 'insurance-files-create',
    route: '/market-participants/insurance/files/create',
    component: <InsuranceFilesCreate />,
  },
  {
    id: 'insurance-files-create',
    route: '/market-participants/insurance/files/edit/:id',
    component: <InsuranceFilesEdit />,
  },
  //   insurer
  {
    id: 'insurer-show',
    route: '/market-participants/insurance/insurer',
    component: <InsurerShow />,
  },
  {
    id: 'insurer-create',
    route: '/market-participants/insurance/insurer/create',
    component: <InsurerCreate />,
  },
  {
    id: 'insurer-create',
    route: '/market-participants/insurance/insurer/edit/:id',
    component: <InsurerEdit />,
  },
];
