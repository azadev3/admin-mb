import { lazy } from 'react';

const MacroprudentialPolicyFrameworkCaptionShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/macroprudential-captions/MacroprudentialPolicyFrameworkCaptionShow'
    ),
);
const MacroprudentialPolicyFrameworkCaptionCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/macroprudential-captions/MacroprudentialPolicyFrameworkCaptionCreate'
    ),
);

export const MacroprudentialPolicyFrameworkCaptions = [
  {
    id: 'MacroprudentialPolicyFrameworkCaption-show',
    route: '/financial-stability/MacroprudentialPolicyFrameworkCaption',
    component: <MacroprudentialPolicyFrameworkCaptionShow />,
  },
  {
    id: 'MacroprudentialPolicyFrameworkCaption-create',
    route: '/financial-stability/MacroprudentialPolicyFrameworkCaption/create',
    component: <MacroprudentialPolicyFrameworkCaptionCreate />,
  },
];
