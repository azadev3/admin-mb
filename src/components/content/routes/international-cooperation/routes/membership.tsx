import { lazy } from 'react';

const MembershipInternationalOrganizationShow = lazy(
  () =>
    import(
      '../../../components/international-cooperation/membership/MembershipInternationalOrganizationShow'
    ),
);
const MembershipInternationalOrganizationCreate = lazy(
  () =>
    import(
      '../../../components/international-cooperation/membership/MembershipInternationalOrganizationCreate'
    ),
);
const MembershipInternationalOrganizationEdit = lazy(
  () =>
    import(
      '../../../components/international-cooperation/membership/MembershipInternationalOrganizationEdit'
    ),
);

export const MembershipInternationalOrganization = [
  {
    id: 'MembershipInternationalOrganization-show',
    route: '/international-cooperation/MembershipInternationalOrganization',
    component: <MembershipInternationalOrganizationShow />,
  },
  {
    id: 'MembershipInternationalOrganization-create',
    route: '/international-cooperation/MembershipInternationalOrganization/create',
    component: <MembershipInternationalOrganizationCreate />,
  },
  {
    id: 'MembershipInternationalOrganization-edit',
    route: '/international-cooperation/MembershipInternationalOrganization/edit/:id',
    component: <MembershipInternationalOrganizationEdit />,
  },
];
