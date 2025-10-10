import { lazy } from 'react';

const FinancingActivityCaptionShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/financing-activity/FinancingActivityCaptionShow'
    ),
);
const FinancingActivityCaptionCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/financing-activity/FinancingActivityCaptionCreate'
    ),
);

const FinancingActivityShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/financing-activity/FinancingActivityShow'
    ),
);
const FinancingActivityCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/financing-activity/FinancingActivityCreate'
    ),
);
const FinancingActivityEdit = lazy(
  () =>
    import(
      '../../../components/financal-stability/financing-activity/FinancingActivityEdit'
    ),
);

export const FinancingActivityCaptions = [
  {
    id: 'FinancingActivityCaption-show',
    route: '/financial-stability/FinancingActivityCaption',
    component: <FinancingActivityCaptionShow />,
  },
  {
    id: 'FinancingActivityCaption-create',
    route: '/financial-stability/FinancingActivityCaption/create',
    component: <FinancingActivityCaptionCreate />,
  },
];

export const FinancingActivity = [
  {
    id: 'FinancingActivity-show',
    route: '/financial-stability/FinancingActivity',
    component: <FinancingActivityShow />,
  },
  {
    id: 'FinancingActivity-edit',
    route: '/financial-stability/FinancingActivity/edit/:id',
    component: <FinancingActivityEdit />,
  },
  {
    id: 'FinancingActivity-create',
    route: '/financial-stability/FinancingActivity/create',
    component: <FinancingActivityCreate />,
  },
];
