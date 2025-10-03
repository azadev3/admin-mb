import { lazy } from 'react';

const NominationCaptionShow = lazy(
  () =>
    import(
      '../../../components/payment-systems/nomination-caption/NominationCaptionShow'
    ),
);
const NominationCaptionCreate = lazy(
  () =>
    import(
      '../../../components/payment-systems/nomination-caption/NominationCaptionCreate'
    ),
);

export const NominationCaption = [
  {
    id: 'NominationCaption-show',
    route: '/payment-systems/NominationCaption',
    component: <NominationCaptionShow />,
  },
  {
    id: 'NominationCaption-create',
    route: '/payment-systems/NominationCaption/create',
    component: <NominationCaptionCreate />,
  },
];
