import MonetarCategoryCreate from '../components/monetar/monetar_captions/MonetarCategoryCreate';
import MonetarCategoryEdit from '../components/monetar/monetar_captions/MonetarCategoryEdit';
import MonetarCategoryShow from '../components/monetar/monetar_captions/MonetarCategoryShow';
import MonetarValuesCreate from '../components/monetar/monetar_values/MonetarValuesCreate';
import MonetarValuesEdit from '../components/monetar/monetar_values/MonetarValuesEdit';
import MonetarValuesShow from '../components/monetar/monetar_values/MonetarValuesShow';

export const monetarRoutes = [
  // captions
  {
    id: 'monetar-captions-show',
    route: '/monetar-gostericiler-captions',
    component: <MonetarCategoryShow />,
  },
  {
    id: 'monetar-captions-create',
    route: '/monetar-gostericiler-captions/create',
    component: <MonetarCategoryCreate />,
  },
  {
    id: 'monetar-captions-edit',
    route: '/monetar-gostericiler-captions/edit/:id',
    component: <MonetarCategoryEdit />,
  },
  // values
  {
    id: 'monetar-values-show',
    route: '/monetar-gostericiler-values',
    component: <MonetarValuesShow />,
  },
  {
    id: 'monetar-values-create',
    route: '/monetar-gostericiler-values/create',
    component: <MonetarValuesCreate />,
  },
  {
    id: 'monetar-values-edit',
    route: '/monetar-gostericiler-values/edit/:id',
    component: <MonetarValuesEdit />,
  },
];
