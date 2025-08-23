import InflationValuesCreate from '../components/inflation/InflationValuesCreate';
import InflationValuesEdit from '../components/inflation/InflationValuesEdit';
import InflationValuesShow from '../components/inflation/InflationValuesShow';

export const inflationRoutes = [
  { id: 'inflation-show', route: '/inflasiya', component: <InflationValuesShow /> },
  {
    id: 'inflation-create',
    route: '/inflasiya/create',
    component: <InflationValuesCreate />,
  },
  {
    id: 'inflation-edit',
    route: '/inflasiya/edit/:id',
    component: <InflationValuesEdit />,
  },
];
