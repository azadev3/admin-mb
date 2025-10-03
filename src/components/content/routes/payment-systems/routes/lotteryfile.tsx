import { lazy } from 'react';

const LotteryFileShow = lazy(
  () => import('../../../components/payment-systems/lottery-file/LotteryFileShow'),
);
const LotteryFileCreate = lazy(
  () => import('../../../components/payment-systems/lottery-file/LotteryFileCreate'),
);
const LotteryFileEdit = lazy(
  () => import('../../../components/payment-systems/lottery-file/LotteryFileEdit'),
);

export const LotteryFile = [
  {
    id: 'LotteryFile-show',
    route: '/payment-systems/LotteryFile',
    component: <LotteryFileShow />,
  },
  {
    id: 'LotteryFile-create',
    route: '/payment-systems/LotteryFile/create',
    component: <LotteryFileCreate />,
  },
  {
    id: 'LotteryFile-create',
    route: '/payment-systems/LotteryFile/edit/:id',
    component: <LotteryFileEdit />,
  },
];
