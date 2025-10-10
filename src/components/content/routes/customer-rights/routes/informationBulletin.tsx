import { lazy } from 'react';

const InformationBulletinShow = lazy(
  () =>
    import(
      '../../../components/customer-rights/information-bulletin/InformationBulletinShow'
    ),
);
const InformationBulletinCreate = lazy(
  () =>
    import(
      '../../../components/customer-rights/information-bulletin/InformationBulletinCreate'
    ),
);

const InformationBulletinEdit = lazy(
  () =>
    import(
      '../../../components/customer-rights/information-bulletin/InformationBulletinEdit'
    ),
);

export const InformationBulletin = [
  {
    id: 'customer-rights-InformationBulletin-show',
    route: '/customer-rights/information-bulletin',
    component: <InformationBulletinShow />,
  },
  {
    id: 'customer-rights-InformationBulletin-create',
    route: '/customer-rights/information-bulletin/create',
    component: <InformationBulletinCreate />,
  },
  {
    id: 'customer-rights-InformationBulletin-create',
    route: '/customer-rights/information-bulletin/edit/:id',
    component: <InformationBulletinEdit />,
  },
];
