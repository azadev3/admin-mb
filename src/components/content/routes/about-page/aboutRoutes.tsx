import ContactCreate from '../../components/about-page/contact-us/ContactCreate';
import ContactShow from '../../components/about-page/contact-us/ContactShow';
import GeneralInformationCreate from '../../components/about-page/general-information/GeneralInformationCreate';
import GeneralInformationShow from '../../components/about-page/general-information/GeneralInformationShow';
import ChronologyCreate from '../../components/about-page/history/ChronologyCreate';
import ChronologyEdit from '../../components/about-page/history/ChronologyEdit';
import ChronologyShow from '../../components/about-page/history/ChronologyShow';
import HistoryCreate from '../../components/about-page/history/HistoryCreate';
import HistoryShow from '../../components/about-page/history/HistoryShow';
import DirectorCreate from '../../components/about-page/management/directors/DirectorCreate';
import DirectorEdit from '../../components/about-page/management/directors/DirectorEdit';
import DirectorShow from '../../components/about-page/management/directors/DirectorShow';
import FormerChairmenCreate from '../../components/about-page/management/former-chairmen/FormerChairmenCreate';
import FormerChairmenEdit from '../../components/about-page/management/former-chairmen/FormerChairmenEdit';
import FormerChairmenShow from '../../components/about-page/management/former-chairmen/FormerChairmenShow';
import MissionCaptionsCreate from '../../components/about-page/missions/mission_captions/MissionCaptionsCreate';
import MissionCaptionsShow from '../../components/about-page/missions/mission_captions/MissionCaptionsShow';
import MissionCreate from '../../components/about-page/missions/mission_values/MissionCreate';
import MissionEdit from '../../components/about-page/missions/mission_values/MissionEdit';
import MissionShow from '../../components/about-page/missions/mission_values/MissionShow';
import StructureCaptionsCreate from '../../components/about-page/structure/StructureCaptionsCreate';
import StructureCaptionsShow from '../../components/about-page/structure/StructureCaptionsShow';

// Haqqimizda - Umumi Melumat
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

// Haqqimizda - Tarix
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

// Haqqimizda - Tarix - Xronologiya
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

// Haqqimizda - Missiya ve Deyerler - Captions (Basliqlar)
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

// Haqqimizda - Missiya ve Deyerler
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

// Haqqimizda - Elaqe
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

// Haqqimizda - Direktorlar
const AboutDirectors = [
  {
    id: 'directors-show',
    route: '/haqqimizda/idareetme-direktorlar',
    component: <DirectorShow />,
  },
  {
    id: 'directors-create',
    route: '/haqqimizda/idareetme-direktorlar/create',
    component: <DirectorCreate />,
  },
  {
    id: 'directors-edit',
    route: '/haqqimizda/idareetme-direktorlar/edit/:id',
    component: <DirectorEdit />,
  },
];

// Haqqimizda - Sabiq Sədrlər
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

// Haqqimizda - Teskilati Struktur
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

export const aboutRoutes = [
  ...AboutGeneralInformation,
  ...AboutHistory,
  ...AboutHistoryChronology,
  ...AboutMissionCaptions,
  ...AboutMission,
  ...AboutContact,
  ...AboutDirectors,
  ...AboutFormerChain,
  ...AboutStructure,
];
