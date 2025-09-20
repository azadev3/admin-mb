import { lazy } from 'react';

// Directors
const DirectorCreate = lazy(
  () => import('../../components/about-page/management/directors/DirectorCreate'),
);
const DirectorEdit = lazy(
  () => import('../../components/about-page/management/directors/DirectorEdit'),
);
const DirectorShow = lazy(
  () => import('../../components/about-page/management/directors/DirectorShow'),
);
// Directors - Content
const DirectorContentCreate = lazy(
  () =>
    import(
      '../../components/about-page/management/director-contents/DirectorContentCreate'
    ),
);
const DirectorContentEdit = lazy(
  () =>
    import(
      '../../components/about-page/management/director-contents/DirectorContentEdit'
    ),
);
const DirectorContentShow = lazy(
  () =>
    import(
      '../../components/about-page/management/director-contents/DirectorContentShow'
    ),
);
// Directors - Contact
const DirectorContactCreate = lazy(
  () =>
    import(
      '../../components/about-page/management/director-contact/DirectorContactCreate'
    ),
);
const DirectorContactEdit = lazy(
  () =>
    import('../../components/about-page/management/director-contact/DirectorContactEdit'),
);
const DirectorContactShow = lazy(
  () =>
    import('../../components/about-page/management/director-contact/DirectorContactShow'),
);

const DirectorContact = [
  {
    id: 'directors-contact-show',
    route: '/haqqimizda/director-contact',
    component: <DirectorContactShow />,
  },
  {
    id: 'directors-contact-create',
    route: '/haqqimizda/director-contact/create',
    component: <DirectorContactCreate />,
  },
  {
    id: 'directors-contact-edit',
    route: '/haqqimizda/director-contact/edit/:id',
    component: <DirectorContactEdit />,
  },
];

const DirectorContents = [
  {
    id: 'directors-content-show',
    route: '/haqqimizda/director-content',
    component: <DirectorContentShow />,
  },
  {
    id: 'directors-content-create',
    route: '/haqqimizda/director-content/create',
    component: <DirectorContentCreate />,
  },
  {
    id: 'directors-content-edit',
    route: '/haqqimizda/director-content/edit/:id',
    component: <DirectorContentEdit />,
  },
];

const Directors = [
  {
    id: 'directors-show',
    route: '/haqqimizda/idareetme-direktorlar',
    component: <DirectorShow />,
  },
  {
    id: 'directors-content-create',
    route: '/haqqimizda/idareetme-direktorlar/create',
    component: <DirectorCreate />,
  },
  {
    id: 'directors-content-edit',
    route: '/haqqimizda/idareetme-direktorlar/edit/:id',
    component: <DirectorEdit />,
  },
];

export const directorRoutes = [...DirectorContact, ...DirectorContents, ...Directors];
