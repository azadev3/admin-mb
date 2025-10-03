import { lazy } from 'react';

const LotteryShow = lazy(
  () => import('../../../components/payment-systems/lottery/LotteryShow'),
);
const LotteryCreate = lazy(
  () => import('../../../components/payment-systems/lottery/LotteryCreate'),
);
const LotteryEdit = lazy(
  () => import('../../../components/payment-systems/lottery/LotteryEdit'),
);

export const Lottery = [
  {
    id: 'Lottery-show',
    route: '/payment-systems/Lottery',
    component: <LotteryShow />,
  },
  {
    id: 'Lottery-create',
    route: '/payment-systems/Lottery/create',
    component: <LotteryCreate />,
  },
  {
    id: 'Lottery-create',
    route: '/payment-systems/Lottery/edit/:id',
    component: <LotteryEdit />,
  },
];
