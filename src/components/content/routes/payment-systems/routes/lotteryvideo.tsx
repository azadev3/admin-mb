import { lazy } from 'react';

const LotteryVideoShow = lazy(
  () => import('../../../components/payment-systems/lottery-video/LotteryVideoShow'),
);
const LotteryVideoCreate = lazy(
  () => import('../../../components/payment-systems/lottery-video/LotteryVideoCreate'),
);
const LotteryVideoEdit = lazy(
  () => import('../../../components/payment-systems/lottery-video/LotteryVideoEdit'),
);

export const LotteryVideo = [
  {
    id: 'LotteryVideo-show',
    route: '/payment-systems/LotteryVideo',
    component: <LotteryVideoShow />,
  },
  {
    id: 'LotteryVideo-create',
    route: '/payment-systems/LotteryVideo/create',
    component: <LotteryVideoCreate />,
  },
  {
    id: 'LotteryVideo-create',
    route: '/payment-systems/LotteryVideo/edit/:id',
    component: <LotteryVideoEdit />,
  },
];
