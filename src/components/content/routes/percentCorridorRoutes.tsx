import PercentCategoryCreate from '../components/percent-corridor/percent_captions/PercentCategoryCreate';
import PercentCategoryEdit from '../components/percent-corridor/percent_captions/PercentCategoryEdit';
import PercentCategoryShow from '../components/percent-corridor/percent_captions/PercentCategoryShow';
import PercentValuesCreate from '../components/percent-corridor/percent_values/PercentValuesCreate';
import PercentValuesEdit from '../components/percent-corridor/percent_values/PercentValuesEdit';
import PercentValuesShow from '../components/percent-corridor/percent_values/PercentValuesShow';

export const percentCorridorRoutes = [
  // captions
  {
    id: 'percent-corridor-captions-show',
    route: '/faiz-dehlizi-captions',
    component: <PercentCategoryShow />,
  },
  {
    id: 'percent-corridor-captions-create',
    route: '/faiz-dehlizi-captions/create',
    component: <PercentCategoryCreate />,
  },
  {
    id: 'percent-corridor-captions-edit',
    route: '/faiz-dehlizi-captions/edit/:id',
    component: <PercentCategoryEdit />,
  },
  // values
  {
    id: 'percent-corridor-values-show',
    route: '/faiz-dehlizi-values',
    component: <PercentValuesShow />,
  },
  {
    id: 'percent-corridor-values-create',
    route: '/faiz-dehlizi-values/create',
    component: <PercentValuesCreate />,
  },
  {
    id: 'percent-corridor-values-edit',
    route: '/faiz-dehlizi-values/edit/:id',
    component: <PercentValuesEdit />,
  },
];
