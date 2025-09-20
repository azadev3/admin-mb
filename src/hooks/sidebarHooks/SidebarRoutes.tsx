import { CiHome, CiSettings } from 'react-icons/ci';
import { FaHouse } from 'react-icons/fa6';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GoFileMedia } from 'react-icons/go';
import type { RoutesInterface } from '../../components/types/sidebar/routeType';
import { FcStatistics } from 'react-icons/fc';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { SiCoinmarketcap } from 'react-icons/si';

const getIdFromString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export const SIDEBAR_ROUTES: RoutesInterface[] = [
  {
    id: getIdFromString('Əsas'),
    title: 'Əsas',
    route: '/',
    activeIcon: <FaHouse />,
    isDropdownRoute: false,
  },
  {
    id: getIdFromString('Sayt Tənzimləmələri'),
    title: 'Sayt Tənzimləmələri',
    route: '/logo',
    activeIcon: <CiSettings fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('Loqonu Dəyiş'),
        title: 'Loqonu Dəyiş',
        to: '/logo',
      },
      {
        id: getIdFromString('Sosial Linklər'),
        title: 'Sosial Linklər',
        to: '/sosial',
      },
      {
        id: getIdFromString('Telefonlar'),
        title: 'Footer - Əlaqə məlumatları',
        to: '/telefonlar',
      },
      {
        id: getIdFromString('Unvanlar'),
        title: 'Ünvanlar',
        to: '/address',
      },
      {
        id: getIdFromString('Digər Məlumatlar'),
        title: 'Digər Məlumatlar',
        to: '/diger-melumatlar',
      },
      {
        id: getIdFromString('Tercumeler'),
        title: 'Tərcümələr',
        to: '/tercumeler',
      },
    ],
  },
  {
    id: getIdFromString('Ana Səhifə'),
    title: 'Ana Səhifə',
    route: '',
    activeIcon: <CiHome fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('Hero Bölməsi'),
        title: 'Hero Bölməsi',
        to: '/hero',
      },
      {
        id: getIdFromString('Fokus & Xəbərlər b.'),
        title: 'Fokus & Xəbərlər b.',
        to: '',
        isDropdown: true,
        dropdownItems: [
          { id: getIdFromString('Fokus'), title: 'Fokus', to: '/fokus' },
          {
            id: getIdFromString('Xəbərlər'),
            title: 'Xəbərlər',
            to: '/xeberler',
          },
          {
            id: getIdFromString('Elanlar'),
            title: 'Elanlar',
            to: '/elanlar',
          },
        ],
      },
      {
        id: getIdFromString('Digital Portal'),
        title: 'Digital Portal',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('Digital Portal - Başlıq və Mətn'),
            title: 'Digital Portal - Başlıq və Mətn',
            to: '/digital-portal-texts',
          },
          {
            id: getIdFromString('Digital Portal - Kartlar'),
            title: 'Digital Portal - Kartlar',
            to: '/digital-portal-cards',
          },
        ],
      },
      {
        id: getIdFromString('Makroiqtisadi Sənədlər & Hesabatlar'),
        title: 'Makroiqtisadi Sənədlər & Hesabatlar',
        to: '/makroiqtisadi-senedler-ve-hesabatlar',
      },
      {
        id: getIdFromString('Məzənnələr və Dəyərlər'),
        title: 'Məzənnələr və Dəyərlər',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('Faiz Dehlizi'),
            title: 'Faiz Dəhlizi',
            to: '',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('Faiz dehlizi titles'),
                title: 'Faiz Dəhlizi - Başlıq',
                to: '/faiz-dehlizi-captions',
              },
              {
                id: getIdFromString('Faiz dehlizi Main'),
                title: 'Faiz Dəhlizi - Dəyərlər',
                to: '/faiz-dehlizi-values',
              },
            ],
          },
          {
            id: getIdFromString('MerkeziBankinNotlari'),
            title: 'Mərkəzi Bankın Notları',
            to: '',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('Bank note category'),
                title: 'Bank Notları - Başlıq',
                to: '/bank-notes-captions',
              },
              {
                id: getIdFromString('Bank note values'),
                title: 'Bank Notları - Dəyərlər',
                to: '/bank-notes-values',
              },
            ],
          },
          {
            id: getIdFromString('Bank Sektoru'),
            title: 'Bank Sektoru',
            to: '',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('Bank sektoru titles'),
                title: 'Bank Sektoru - Başlıq',
                to: '/bank-sektoru-captions',
              },
              {
                id: getIdFromString('Bank sektoru Main'),
                title: 'Bank Sektoru - Dəyərlər',
                to: '/bank-sektoru-values',
              },
            ],
          },
          {
            id: getIdFromString('Monetar Göstəricilər'),
            title: 'Monetar Göstəricilər',
            to: '',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('Monetar Göstəricilər titles'),
                title: 'Monetar Göst. - Başlıq',
                to: '/monetar-gostericiler-captions',
              },
              {
                id: getIdFromString('Monetar Göstəricilər Main'),
                title: 'Monetar Göst. - Dəyərlər',
                to: '/monetar-gostericiler-values',
              },
            ],
          },
          {
            id: getIdFromString('Inflasiya'),
            title: 'İnflasiya',
            to: '/inflasiya',
          },
        ],
      },
    ],
  },
  {
    id: getIdFromString('Haqqimizda'),
    title: 'Haqqımızda',
    route: '',
    activeIcon: <IoMdInformationCircleOutline fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('aciqlamalarabout'),
        title: 'Açıqlamalar',
        to: '/about',
      },
      {
        id: getIdFromString('offices'),
        title: 'Ofis',
        to: '/office',
      },
      {
        id: getIdFromString('umumi melumat'),
        title: 'Ümumi Məlumat',
        to: '/haqqimizda/umumi-melumat',
      },
      {
        id: getIdFromString('tarix bolmesi'),
        title: 'Tariximiz',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('tarix-xronologiya'),
            title: 'Xronologiya',
            to: '/haqqimizda/tarix-xronologiya',
          },
          {
            id: getIdFromString('tarix'),
            title: 'Tarix',
            to: '/haqqimizda/tarix',
          },
        ],
      },
      {
        id: getIdFromString('Missiya və dəyərlər'),
        title: 'Missiya və dəyərlər',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('mission-deyerler-caption'),
            title: 'Missiya və Dəyərlər - Başlıq',
            to: '/haqqimizda/missiya-ve-deyerler',
          },
          {
            id: getIdFromString('mission-deyerler-values'),
            title: 'Missiya və Dəyərlər',
            to: '/haqqimizda/missiya-ve-deyerler-values',
          },
        ],
      },
      {
        id: getIdFromString('Təşkilati Struktur'),
        title: 'Təşkilati Struktur',
        to: '/haqqimizda/teskilati-struktur',
      },
      {
        id: getIdFromString('Əlaqə'),
        title: 'Əlaqə',
        to: '/haqqimizda/elaqe',
      },
      {
        id: getIdFromString('idareetme'),
        title: 'İdarəetmə',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('Direktorlar'),
            to: '/haqqimizda/idareetme-direktorlar',
            title: 'Direktorlar',
          },
          {
            id: getIdFromString('Sabiq Sədrlər'),
            to: '/haqqimizda/idareetme-sabiq-sedrler',
            title: 'Sabiq Sədrlər',
          },
          {
            id: getIdFromString('direktorcontent'),
            to: '/haqqimizda/director-content',
            title: 'Direktor - Daxili Content',
          },
          {
            id: getIdFromString('direktorcontact'),
            to: '/haqqimizda/director-contact',
            title: 'Direktorlar - Əlaqə',
          },
        ],
      },
    ],
  },
  {
    id: getIdFromString('Media'),
    title: 'Media',
    route: '',
    activeIcon: <GoFileMedia fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('Şəkillər və Videolar'),
        title: 'Şəkillər və Videolar',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('Şəkillər'),
            title: 'Şəkillər',
            to: '/sekiller',
          },
          {
            id: getIdFromString('Videolar'),
            title: 'Videolar',
            to: '/videolar',
          },
        ],
      },
      {
        id: getIdFromString('Tedbirler'),
        title: 'Tədbirlər',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('tədbirəlavəet'),
            title: 'Tədbir Başlıq və Açıqlama',
            to: '/events',
          },
          {
            id: getIdFromString('eventcontent'),
            title: 'Daxili Başlıq və Açıqlamalar',
            to: '/eventcontent',
          },
          {
            id: getIdFromString('eventimages'),
            title: 'Tədbir Şəkilləri',
            to: '/eventimage',
          },
          {
            id: getIdFromString('eventvideos'),
            title: 'Tədbir Videoları',
            to: '/eventvideo',
          },
          {
            id: getIdFromString('futureEvents'),
            title: 'Gələcək Tədbirlər',
            to: '/futureevent',
          },
        ],
      },
      {
        id: getIdFromString('Media Açıqlamalar'),
        title: 'Media Açıqlamalar',
        to: '/mediacaption',
        isDropdown: false,
      },
      {
        id: getIdFromString('Müsahibələr və Çıxışlar'),
        title: 'Müsahibələr & Çıxışlar',
        to: '/interview',
        isDropdown: false,
      },
      {
        id: getIdFromString('MediaSorgulari'),
        title: 'Media Sorğuları',
        to: '/mediaquery',
        isDropdown: false,
      },
    ],
  },
  {
    id: getIdFromString('Statistika'),
    title: 'Statistika',
    route: '',
    activeIcon: <FcStatistics fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('statisticaCaptions'),
        title: 'Başlıqlar',
        to: '/statistika-captions',
      },
      {
        id: getIdFromString('statisticaBulleten'),
        title: 'Statistika - Bülleten',
        to: '/statistika-bulleten',
      },
      {
        id: getIdFromString('graphic'),
        title: 'Statistik Hesabatlar Qrafiki',
        to: '',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('graphic-titles'),
            title: 'Başlıqlar',
            to: '/report-titles',
          },
          {
            id: getIdFromString('graphic-files'),
            title: 'Fayllar və Dəyərlər',
            to: '/report-file',
          },
        ],
      },
      {
        id: getIdFromString('statistical-policy'),
        title: 'Məlumatların Reviziyası Siyasəti',
        to: '/revisionpolicy',
        isDropdown: false,
      },
      {
        id: getIdFromString('methodology'),
        title: 'Metodologiya',
        to: '/methodology',
        isDropdown: false,
      },
    ],
  },
  {
    id: getIdFromString('marketparticipants'),
    title: 'Bazar İştirakçıları',
    route: '',
    activeIcon: <SiCoinmarketcap fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('marketparticipants-insurance'),
        title: 'Sığortalar',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('marketparticipants-insurance-captions'),
            title: 'Başlıqlar',
            to: '/market-participants/insurance/captions',
          },
          {
            id: getIdFromString('marketparticipants-insurance-files'),
            title: 'Fayl və Dəyərlər',
            to: '/market-participants/insurance/files',
          },
          {
            id: getIdFromString('marketparticipants-insurance-insurer'),
            title: 'Sığorta',
            to: '/market-participants/insurance/insurer',
          },
        ],
      },
      {
        id: getIdFromString('marketparticipants-banks'),
        title: 'Banklar',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('marketparticipants-banks-captions'),
            title: 'Başlıqlar',
            to: '/market-participants/banks/captions',
          },
          {
            id: getIdFromString('marketparticipants-banks-files'),
            title: 'Fayl və Dəyərlər',
            to: '/market-participants/banks/files',
          },
          {
            id: getIdFromString('marketparticipants-bank'),
            title: 'Bank',
            to: '/market-participants/banks/bank',
          },
          {
            id: getIdFromString('marketparticipants-banks-operators'),
            title: 'Operatorlar',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('marketparticipants-banks-operators-captions'),
                title: 'Başlıqlar',
                to: '/market-participants/banks/operator/captions',
              },
              {
                id: getIdFromString('marketparticipants-banks-operators-bank'),
                title: 'Bank',
                to: '/market-participants/banks/operator/bank',
              },
            ],
          },
          {
            id: getIdFromString('marketparticipants-creditunion'),
            title: 'Kredit Təşkilatları',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('marketparticipants-credit-union-captions'),
                title: 'Başlıqlar',
                to: '/market-participants/banks/creditunion/captions',
              },
              {
                id: getIdFromString('marketparticipants-credit-union-descriptions'),
                title: 'Açıqlamalar',
                to: '/market-participants/banks/creditunion/descriptions',
              },
            ],
          },
          {
            id: getIdFromString('marketparticipants-payments'),
            title: 'Bankların Ödəniş Agentləri',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('marketparticipants-payments-captions'),
                title: 'Başlıqlar',
                to: '/market-participants/banks/payment/captions',
              },
              {
                id: getIdFromString('marketparticipants-payment-files'),
                title: 'Fayllar və Dəyərlər',
                to: '/market-participants/banks/payment/files',
              },
            ],
          },
        ],
      },
      {
        id: getIdFromString('Qiymətli kağızların dövlət qeydiyyatı'),
        title: 'Dövlət Qeydiyyatı Təlimatı',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('registr-captions'),
            title: 'Başlıqlar',
            to: '/market-participants/banks/register/captions',
          },
          {
            id: getIdFromString('registr-descriptions'),
            title: 'Açıqlamalar',
            to: '/market-participants/banks/register/descriptions',
          },
        ],
      },
      {
        id: getIdFromString('nezaret-tedbiri'),
        title: 'Tətbiq Edilmiş Nəzarət Tədbirləri',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('nezaret-tedbiri-category'),
            title: 'Kateqoriya Əlavə Et',
            to: '/market-participants/control-measure/category',
          },
          {
            id: getIdFromString('nezaret-tedbiri-data'),
            title: 'Məlumat Əlavə Et',
            to: '/market-participants/control-measure/values',
          },
        ],
      },
      {
        id: getIdFromString('share-holder'),
        title: 'Səhmdarlara Dair Təlimat',
        isDropdown: false,
        to: '/market-participants/share-holder/captions',
      },
    ],
  },
  {
    id: getIdFromString('legalacts'),
    title: 'Hüquqi Aktlar',
    route: '/legalact',
    activeIcon: <IoDocumentAttachOutline fontSize={24} />,
    isDropdownRoute: false,
  },
];
