import { lazy } from 'react';

const BankSectoryCategoryCreate = lazy(
  () =>
    import(
      '../components/bank-sectory/banksectory_captions/BankSectoryCategoryCreate'
    ),
);
const BankSectoryCategoryEdit = lazy(
  () =>
    import(
      '../components/bank-sectory/banksectory_captions/BankSectoryCategoryEdit'
    ),
);
const BankSectoryCategoryShow = lazy(
  () =>
    import(
      '../components/bank-sectory/banksectory_captions/BankSectoryCategoryShow'
    ),
);

const BankSectoryValuesCreate = lazy(
  () =>
    import(
      '../components/bank-sectory/banksectory_values/BankSectoryValuesCreate'
    ),
);
const BankSectoryValuesEdit = lazy(
  () =>
    import(
      '../components/bank-sectory/banksectory_values/BankSectoryValuesEdit'
    ),
);
const BankSectoryValuesShow = lazy(
  () =>
    import(
      '../components/bank-sectory/banksectory_values/BankSectoryValuesShow'
    ),
);

export const bankSectoryRoutes = [
  // captions
  {
    id: 'bank-sectory-captions-show',
    route: '/bank-sektoru-captions',
    component: <BankSectoryCategoryShow />,
  },
  {
    id: 'bank-sectory-captions-create',
    route: '/bank-sektoru-captions/create',
    component: <BankSectoryCategoryCreate />,
  },
  {
    id: 'bank-sectory-captions-edit',
    route: '/bank-sektoru-captions/edit/:id',
    component: <BankSectoryCategoryEdit />,
  },
  // values
  {
    id: 'bank-sectory-values-show',
    route: '/bank-sektoru-values',
    component: <BankSectoryValuesShow />,
  },
  {
    id: 'bank-sectory-values-create',
    route: '/bank-sektoru-values/create',
    component: <BankSectoryValuesCreate />,
  },
  {
    id: 'bank-sectory-values-edit',
    route: '/bank-sektoru-values/edit/:id',
    component: <BankSectoryValuesEdit />,
  },
];
