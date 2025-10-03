import { lazy } from 'react';

const ParticipantShow = lazy(
  () => import('../../../components/payment-systems/participant/ParticipantShow'),
);
const ParticipantCreate = lazy(
  () => import('../../../components/payment-systems/participant/ParticipantCreate'),
);
const ParticipantEdit = lazy(
  () => import('../../../components/payment-systems/participant/ParticipantEdit'),
);

export const Participant = [
  {
    id: 'Participant-show',
    route: '/payment-systems/Participant',
    component: <ParticipantShow />,
  },
  {
    id: 'Participant-create',
    route: '/payment-systems/Participant/create',
    component: <ParticipantCreate />,
  },
  {
    id: 'Participant-create',
    route: '/payment-systems/Participant/edit/:id',
    component: <ParticipantEdit />,
  },
];
