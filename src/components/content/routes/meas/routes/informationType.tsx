import { lazy } from 'react';

const MeasInformationTypeShow = lazy(
  () => import('../../../components/meas/information-type/MeasInformationTypeShow'),
);
const MeasInformationTypeCreate = lazy(
  () => import('../../../components/meas/information-type/MeasInformationTypeCreate'),
);
const MeasInformationTypeEdit = lazy(
  () => import('../../../components/meas/information-type/MeasInformationTypeEdit'),
);

export const MeasInformationType = [
  {
    id: 'measinfo-show',
    route: '/meas/information-type',
    component: <MeasInformationTypeShow />,
  },
  {
    id: 'measinfo-create',
    route: '/meas/information-type/create',
    component: <MeasInformationTypeCreate />,
  },
  {
    id: 'measinfo-edit',
    route: '/meas/information-type/edit/:id',
    component: <MeasInformationTypeEdit />,
  },
];
