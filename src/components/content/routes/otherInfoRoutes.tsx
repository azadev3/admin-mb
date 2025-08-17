import OtherInfoCreate from '../components/other-infos/OtherInfoCreate';
import OtherInfoEdit from '../components/other-infos/OtherInfoEdit';
import OtherInfoShow from '../components/other-infos/OtherInfoShow';

export const otherInfoRoutes = [
  { id: 'other-info-show', route: '/diger-melumatlar', component: <OtherInfoShow /> },
  {
    id: 'other-info-create',
    route: '/diger-melumatlar/create',
    component: <OtherInfoCreate />,
  },
  { id: 'other-info-edit', route: '/diger-melumatlar/edit/:id', component: <OtherInfoEdit /> },
];
