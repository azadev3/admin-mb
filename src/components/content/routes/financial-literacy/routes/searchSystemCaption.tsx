import { lazy } from 'react';

const FinancialSearchSystemCaptionShow = lazy(
  () =>
    import(
      '../../../components/financial-literacy/search-system-caption/FinancialSearchSystemCaptionShow'
    ),
);
const FinancialSearchSystemCaptionCreate = lazy(
  () =>
    import(
      '../../../components/financial-literacy/search-system-caption/FinancialSearchSystemCaptionCreate'
    ),
);
const FinancialSearchSystemCaptionEdit = lazy(
  () =>
    import(
      '../../../components/financial-literacy/search-system-caption/FinancialSearchSystemCaptionEdit'
    ),
);

export const FinancialSearchSystemCaption = [
  {
    id: 'FinancialSearchSystemCaption-show',
    route: '/financial-literacy/FinancialSearchSystemCaption',
    component: <FinancialSearchSystemCaptionShow />,
  },
  {
    id: 'FinancialSearchSystemCaption-create',
    route: '/financial-literacy/FinancialSearchSystemCaption/create',
    component: <FinancialSearchSystemCaptionCreate />,
  },
  {
    id: 'FinancialSearchSystemCaption-edit',
    route: '/financial-literacy/FinancialSearchSystemCaption/edit/:id',
    component: <FinancialSearchSystemCaptionEdit />,
  },
];
