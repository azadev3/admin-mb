import { lazy } from 'react';

const CentralBankCooperationShow = lazy(
  () =>
    import(
      '../../../components/international-cooperation/central-bank-cooperation/CentralBankCooperationShow'
    ),
);
const CentralBankCooperationCreate = lazy(
  () =>
    import(
      '../../../components/international-cooperation/central-bank-cooperation/CentralBankCooperationCreate'
    ),
);
const CentralBankCooperationEdit = lazy(
  () =>
    import(
      '../../../components/international-cooperation/central-bank-cooperation/CentralBankCooperationEdit'
    ),
);

export const CentralBankCooperation = [
  {
    id: 'CentralBankCooperation-show',
    route: '/international-cooperation/CentralBankCooperation',
    component: <CentralBankCooperationShow />,
  },
  {
    id: 'CentralBankCooperation-create',
    route: '/international-cooperation/CentralBankCooperation/create',
    component: <CentralBankCooperationCreate />,
  },
  {
    id: 'CentralBankCooperation-edit',
    route: '/international-cooperation/CentralBankCooperation/edit/:id',
    component: <CentralBankCooperationEdit />,
  },
];
