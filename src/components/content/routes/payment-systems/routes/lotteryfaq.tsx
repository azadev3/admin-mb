import { lazy } from 'react';

const LotteryFaqShow = lazy(
  () => import('../../../components/payment-systems/lottery-faq/LotteryFaqShow'),
);
const LotteryFaqCreate = lazy(
  () => import('../../../components/payment-systems/lottery-faq/LotteryFaqCreate'),
);
const LotteryFaqEdit = lazy(
  () => import('../../../components/payment-systems/lottery-faq/LotteryFaqEdit'),
);

export const LotteryFaq = [
  {
    id: 'LotteryFaq-show',
    route: '/payment-systems/LotteryFaq',
    component: <LotteryFaqShow />,
  },
  {
    id: 'LotteryFaq-create',
    route: '/payment-systems/LotteryFaq/create',
    component: <LotteryFaqCreate />,
  },
  {
    id: 'LotteryFaq-create',
    route: '/payment-systems/LotteryFaq/edit/:id',
    component: <LotteryFaqEdit />,
  },
];
