import { lazy } from 'react';

const TariffShow = lazy(
  () => import('../../../components/payment-systems/tariff/TariffShow'),
);
const TariffCreate = lazy(
  () => import('../../../components/payment-systems/tariff/TariffCreate'),
);
const TariffEdit = lazy(
  () => import('../../../components/payment-systems/tariff/TariffEdit'),
);

export const Tariff = [
  {
    id: 'Tariff-show',
    route: '/payment-systems/Tariff',
    component: <TariffShow />,
  },
  {
    id: 'Tariff-create',
    route: '/payment-systems/Tariff/create',
    component: <TariffCreate />,
  },
  {
    id: 'Tariff-create',
    route: '/payment-systems/Tariff/edit/:id',
    component: <TariffEdit />,
  },
];
