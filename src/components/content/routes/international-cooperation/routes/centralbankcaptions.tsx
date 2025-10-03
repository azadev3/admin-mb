import { lazy } from 'react';

const CentralBankCooperationCaptionShow = lazy(
  () =>
    import(
      '../../../components/international-cooperation/central-bank-captions/CaptionsShow'
    ),
);
const CentralBankCooperationCaptionCreate = lazy(
  () =>
    import(
      '../../../components/international-cooperation/central-bank-captions/CaptionsCreate'
    ),
);

export const CentralBankCooperationCaption = [
  {
    id: 'CentralBankCooperationCaption-show',
    route: '/international-cooperation/CentralBankCooperationCaption',
    component: <CentralBankCooperationCaptionShow />,
  },
  {
    id: 'CentralBankCooperationCaption-create',
    route: '/international-cooperation/CentralBankCooperationCaption/create',
    component: <CentralBankCooperationCaptionCreate />,
  },
];
