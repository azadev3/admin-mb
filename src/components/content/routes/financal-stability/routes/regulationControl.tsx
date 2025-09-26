import { lazy } from 'react';

const RegulationControlShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/regulation-control/RegulationControlShow'
    ),
);
const RegulationControlCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/regulation-control/RegulationControlCreate'
    ),
);
const RegulationControlEdit = lazy(
  () =>
    import(
      '../../../components/financal-stability/regulation-control/RegulationControlEdit'
    ),
);

export const RegulationControl = [
  {
    id: 'RegulationControl-show',
    route: '/financial-stability/RegulationControl',
    component: <RegulationControlShow />,
  },
  {
    id: 'RegulationControl-edit',
    route: '/financial-stability/RegulationControl/edit/:id',
    component: <RegulationControlEdit />,
  },
  {
    id: 'RegulationControl-create',
    route: '/financial-stability/RegulationControl/create',
    component: <RegulationControlCreate />,
  },
];
