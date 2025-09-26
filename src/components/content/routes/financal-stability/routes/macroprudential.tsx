import { lazy } from 'react';

const MacroprudentialPolicyFrameworkShow = lazy(
  () =>
    import(
      '../../../components/financal-stability/macroprudential/MacroprudentialPolicyFrameworkShow'
    ),
);
const MacroprudentialPolicyFrameworkCreate = lazy(
  () =>
    import(
      '../../../components/financal-stability/macroprudential/MacroprudentialPolicyFrameworkCreate'
    ),
);
const MacroprudentialPolicyFrameworkEdit = lazy(
  () =>
    import(
      '../../../components/financal-stability/macroprudential/MacroprudentialPolicyFrameworkEdit'
    ),
);

export const MacroprudentialPolicyFramework = [
  {
    id: 'MacroprudentialPolicyFramework-show',
    route: '/financial-stability/MacroprudentialPolicyFramework',
    component: <MacroprudentialPolicyFrameworkShow />,
  },
  {
    id: 'MacroprudentialPolicyFramework-edit',
    route: '/financial-stability/MacroprudentialPolicyFramework/edit/:id',
    component: <MacroprudentialPolicyFrameworkEdit />,
  },
  {
    id: 'MacroprudentialPolicyFramework-create',
    route: '/financial-stability/MacroprudentialPolicyFramework/create',
    component: <MacroprudentialPolicyFrameworkCreate />,
  },
];
