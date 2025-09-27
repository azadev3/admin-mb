import { lazy } from 'react';

const CustomEditingModeShow = lazy(
  () =>
    import(
      '../../../components/financal-innovation/custom-editing-mode/CustomEditingModeShow'
    ),
);
const CustomEditingModeCreate = lazy(
  () =>
    import(
      '../../../components/financal-innovation/custom-editing-mode/CustomEditingModeCreate'
    ),
);

export const CustomEditingMode = [
  {
    id: 'CustomEditingMode-show',
    route: '/financial-innovation/CustomEditingMode',
    component: <CustomEditingModeShow />,
  },
  {
    id: 'CustomEditingMode-create',
    route: '/financial-innovation/CustomEditingMode/create',
    component: <CustomEditingModeCreate />,
  },
];
