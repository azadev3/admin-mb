import BankSectoryCategoryCreate from '../components/bank-sectory/banksectory_captions/BankSectoryCategoryCreate';
import BankSectoryCategoryEdit from '../components/bank-sectory/banksectory_captions/BankSectoryCategoryEdit';
import BankSectoryCategoryShow from '../components/bank-sectory/banksectory_captions/BankSectoryCategoryShow';
import BankSectoryValuesCreate from '../components/bank-sectory/banksectory_values/BankSectoryValuesCreate';
import BankSectoryValuesEdit from '../components/bank-sectory/banksectory_values/BankSectoryValuesEdit';
import BankSectoryValuesShow from '../components/bank-sectory/banksectory_values/BankSectoryValuesShow';

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
