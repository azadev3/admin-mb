import { lazy } from 'react';
import AboutTitleShow from '../../components/about-page/about-titles/AboutTitleShow';
import AboutTitleCreate from '../../components/about-page/about-titles/AboutTitleCreate';

// General Information
const GeneralInformationCreate = lazy(
  () =>
    import('../../components/about-page/general-information/GeneralInformationCreate'),
);
const GeneralInformationShow = lazy(
  () => import('../../components/about-page/general-information/GeneralInformationShow'),
);

// History
const HistoryCreate = lazy(
  () => import('../../components/about-page/history/HistoryCreate'),
);
const HistoryShow = lazy(() => import('../../components/about-page/history/HistoryShow'));

// Chronology
const ChronologyCreate = lazy(
  () => import('../../components/about-page/history/ChronologyCreate'),
);
const ChronologyEdit = lazy(
  () => import('../../components/about-page/history/ChronologyEdit'),
);
const ChronologyShow = lazy(
  () => import('../../components/about-page/history/ChronologyShow'),
);

// Mission
const MissionCaptionsCreate = lazy(
  () =>
    import('../../components/about-page/missions/mission_captions/MissionCaptionsCreate'),
);
const MissionCaptionsShow = lazy(
  () =>
    import('../../components/about-page/missions/mission_captions/MissionCaptionsShow'),
);
const MissionCreate = lazy(
  () => import('../../components/about-page/missions/mission_values/MissionCreate'),
);
const MissionEdit = lazy(
  () => import('../../components/about-page/missions/mission_values/MissionEdit'),
);
const MissionShow = lazy(
  () => import('../../components/about-page/missions/mission_values/MissionShow'),
);

// Contact
const ContactCreate = lazy(
  () => import('../../components/about-page/contact-us/ContactCreate'),
);
const ContactShow = lazy(
  () => import('../../components/about-page/contact-us/ContactShow'),
);

// Former Chairmen
const FormerChairmenCreate = lazy(
  () =>
    import('../../components/about-page/management/former-chairmen/FormerChairmenCreate'),
);
const FormerChairmenEdit = lazy(
  () =>
    import('../../components/about-page/management/former-chairmen/FormerChairmenEdit'),
);
const FormerChairmenShow = lazy(
  () =>
    import('../../components/about-page/management/former-chairmen/FormerChairmenShow'),
);

// Structure
const StructureCaptionsCreate = lazy(
  () => import('../../components/about-page/structure/StructureCaptionsCreate'),
);
const StructureCaptionsShow = lazy(
  () => import('../../components/about-page/structure/StructureCaptionsShow'),
);

// Offices
const OfficeCreate = lazy(
  () => import('../../components/about-page/office/OfficeCreate'),
);
const OfficeEdit = lazy(() => import('../../components/about-page/office/OfficeEdit'));
const OfficeShow = lazy(() => import('../../components/about-page/office/OfficeShow'));

// Routes
const AboutGeneralInformation = [
  {
    id: 'general-information-show',
    route: '/haqqimizda/umumi-melumat',
    component: <GeneralInformationShow />,
  },
  {
    id: 'general-information-create',
    route: '/haqqimizda/umumi-melumat/create',
    component: <GeneralInformationCreate />,
  },
];

const AboutHistory = [
  {
    id: 'about-history-show',
    route: '/haqqimizda/tarix',
    component: <HistoryShow />,
  },
  {
    id: 'about-history-create',
    route: '/haqqimizda/tarix/create',
    component: <HistoryCreate />,
  },
];

const AboutHistoryChronology = [
  {
    id: 'about-history-chronology-show',
    route: '/haqqimizda/tarix-xronologiya',
    component: <ChronologyShow />,
  },
  {
    id: 'about-history-chronology-create',
    route: '/haqqimizda/tarix-xronologiya/create',
    component: <ChronologyCreate />,
  },
  {
    id: 'about-history-chronology-edit',
    route: '/haqqimizda/tarix-xronologiya/edit/:id',
    component: <ChronologyEdit />,
  },
];

const AboutMissionCaptions = [
  {
    id: 'AboutMissionCaptions-show',
    route: '/haqqimizda/missiya-ve-deyerler',
    component: <MissionCaptionsShow />,
  },
  {
    id: 'AboutMissionCaptions-create',
    route: '/haqqimizda/missiya-ve-deyerler/create',
    component: <MissionCaptionsCreate />,
  },
];

const AboutMission = [
  {
    id: 'AboutMission-show',
    route: '/haqqimizda/missiya-ve-deyerler-values',
    component: <MissionShow />,
  },
  {
    id: 'AboutMission-create',
    route: '/haqqimizda/missiya-ve-deyerler-values/create',
    component: <MissionCreate />,
  },
  {
    id: 'AboutMission-edit',
    route: '/haqqimizda/missiya-ve-deyerler-values/edit/:id',
    component: <MissionEdit />,
  },
];

const AboutContact = [
  {
    id: 'About-contact-show',
    route: '/haqqimizda/elaqe',
    component: <ContactShow />,
  },
  {
    id: 'About-contact-create',
    route: '/haqqimizda/elaqe/create',
    component: <ContactCreate />,
  },
];

const AboutFormerChain = [
  {
    id: 'AboutFormerChain-show',
    route: '/haqqimizda/idareetme-sabiq-sedrler',
    component: <FormerChairmenShow />,
  },
  {
    id: 'AboutFormerChain-create',
    route: '/haqqimizda/idareetme-sabiq-sedrler/create',
    component: <FormerChairmenCreate />,
  },
  {
    id: 'AboutFormerChain-edit',
    route: '/haqqimizda/idareetme-sabiq-sedrler/edit/:id',
    component: <FormerChairmenEdit />,
  },
];

const AboutStructure = [
  {
    id: 'AboutStructure-show',
    route: '/haqqimizda/teskilati-struktur',
    component: <StructureCaptionsShow />,
  },
  {
    id: 'AboutStructure-create',
    route: '/haqqimizda/teskilati-struktur/create',
    component: <StructureCaptionsCreate />,
  },
];

const AboutTitles = [
  {
    id: 'aboutdescriptionstitles-show',
    route: '/about',
    component: <AboutTitleShow />,
  },
  {
    id: 'aboutdescriptionstitles-create',
    route: '/about/create',
    component: <AboutTitleCreate />,
  },
];

const Offices = [
  {
    id: 'office-show',
    route: '/office',
    component: <OfficeShow />,
  },
  {
    id: 'office-create',
    route: '/office/create',
    component: <OfficeCreate />,
  },
  {
    id: 'office-edit',
    route: '/office/edit/:id',
    component: <OfficeEdit />,
  },
];

export const aboutRoutes = [
  ...AboutTitles,
  ...AboutGeneralInformation,
  ...AboutHistory,
  ...AboutHistoryChronology,
  ...AboutMissionCaptions,
  ...AboutMission,
  ...AboutContact,
  ...AboutFormerChain,
  ...AboutStructure,
  ...Offices,
];
