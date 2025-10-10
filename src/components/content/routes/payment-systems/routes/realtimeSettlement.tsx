import { lazy } from 'react';

const RealTimeSettlementSystemShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/realtime-settlement-system/RealtimeSettlementShow'
    ),
);
const RealTimeSettlementSystemCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/realtime-settlement-system/RealtimeSettlementCreate'
    ),
);

export const RealTimeSettlementSystem = [
  {
    id: 'RealTimeSettlementSystem-show',
    route: '/payment-systems/RealTimeSettlementSystem',
    component: <RealTimeSettlementSystemShow />,
  },
  {
    id: 'RealTimeSettlementSystem-create',
    route: '/payment-systems/RealTimeSettlementSystem/create',
    component: <RealTimeSettlementSystemCreate />,
  },
];
