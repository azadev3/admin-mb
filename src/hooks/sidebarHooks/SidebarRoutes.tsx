import { CiHome, CiSettings } from 'react-icons/ci';
import { FaHouse } from 'react-icons/fa6';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GoFileMedia } from 'react-icons/go';
import type { RoutesInterface } from '../../components/types/sidebar/routeType';
import { FcStatistics } from 'react-icons/fc';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { SiCoinmarketcap } from 'react-icons/si';
import { FaMoneyBills } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaSortAmountUp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { MdPolicy } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { MdOutlinePayments } from 'react-icons/md';
import { GiEarthAmerica } from 'react-icons/gi';
import { MdOutlineMoney } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { MdOutlineMenuBook } from 'react-icons/md';
import { IoLogoElectron } from 'react-icons/io5';

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
          {
            id: getIdFromString('valyutaindeksleri'),
            title: 'Valyuta İndeksləri',
            to: '/valyuta-indeksleri',
          },
          {
            id: getIdFromString('yieldcurveimport'),
            title: 'Gəlirlilik Əyrisi',
            to: '/gelirlilik-eyrisi',
          },
          {
            id: getIdFromString('yieldparameter'),
            title: 'Gəlirlilik Parametrləri',
            to: '/gelirlilik-parametrleri',
          },
          {
            id: getIdFromString('yieldurations'),
            title: 'Gəlirlilik Müddətləri',
            to: '/gelirlilik-muddetleri',
          },
          {
            id: getIdFromString('methodologyexplain'),
            title: 'Metodologiya İzahı',
            to: '/methodologyexplain',
          },
          {
            id: getIdFromString('marketpercentdegree'),
            title: 'Bazar Faiz Dərəcəsi',
            to: '/market-degree',
          },
          {
            id: getIdFromString('marketinformation'),
            title: 'Bazar Məlumatı',
            to: '/market-information',
          },
          {
            id: getIdFromString('indexperiod'),
            title: 'İndeks Periodu',
            to: '/index-period',
          },
          {
            id: getIdFromString('indexincreasing'),
            title: 'İdxal İndeksi',
            to: '/index-increasing',
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
        title: 'Ümumi Məlumat',
        to: '/about',
      },
      {
        id: getIdFromString('offices'),
        title: 'Ofis',
        to: '/office',
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
        id: getIdFromString('statute'),
        title: 'Təşkilati Struktur Əsasnamə',
        to: '/statute',
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
            id: getIdFromString('rehberlikdropdown'),
            title: 'Rəhbərlik',
            to: '',
            isDropdown: true,
            dropdownItems: [
              {
                id: getIdFromString('rehberlik'),
                title: 'Rəhbərlik',
                to: '/haqqimizda/manager',
              },
              {
                id: getIdFromString('managerdetail'),
                title: 'Rəhbərlik Daxili',
                to: '/haqqimizda/managerdetail',
              },
              {
                id: getIdFromString('managercontact'),
                title: 'Rəhbərlik - Əlaqə',
                to: '/haqqimizda/managercontact',
              },
            ],
          },
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
        id: getIdFromString('Media Açıqlamalar'),
        title: 'Ümumi Məlumat',
        to: '/mediacaption',
        isDropdown: false,
      },
      {
        id: getIdFromString('Şəkillər və Videolar'),
        title: 'Qalereya',
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
        title: 'Statistik Bülleten',
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
            ],
          },
          {
            id: getIdFromString('marketparticipants-credit-union-descriptions'),
            title: 'Açıqlamalar',
            to: '/market-participants/banks/creditunion/descriptions',
          },
          {
            id: getIdFromString('kreditittifaqlari'),
            title: 'Kredit İttifaqlarının Siyahısı',
            isDropdown: false,
            to: '/pul-siyaseti/graphic',
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
    id: getIdFromString('pulsiyaseti'),
    title: 'Pul Siyasəti',
    route: '',
    activeIcon: <FaMoneyBills fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('pulsiyaseti-basliqlar'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/pul-siyaseti/captions',
      },
      {
        id: getIdFromString('pulsiyaseti-direction'),
        title: 'Pul Siyasətinin Əsas İstiqamətləri',
        isDropdown: false,
        to: '/pul-siyaseti/direction',
      },
      {
        id: getIdFromString('pulsiyaseti-decision'),
        title: 'Pul Siyasəti Qərarları',
        isDropdown: false,
        to: '/pul-siyaseti/decision',
      },
      {
        id: getIdFromString('pulsiyaseti-review'),
        title: 'Pul Siyasəti İcmalı',
        isDropdown: false,
        to: '/pul-siyaseti/review',
      },
      {
        id: getIdFromString('pulsiyaseti-video'),
        title: 'Pul Siyasəti - Videoçarx',
        isDropdown: false,
        to: '/pul-siyaseti/video',
      },
      {
        id: getIdFromString('pulsiyaseti-poster'),
        title: 'Posterlər',
        isDropdown: false,
        to: '/pul-siyaseti/poster',
      },
      {
        id: getIdFromString('pulsiyaseti-analysis-descriptions'),
        title: 'Proqnozlaşdırma və Siyasət Təhlili Sistemi - Açıqlama',
        isDropdown: false,
        to: '/pul-siyaseti/analysis-descriptions',
      },
      {
        id: getIdFromString('pulsiyaseti-analysis-files'),
        title: 'Proqnozlaşdırma və Siyasət Təhlili Sistemi - Fayl',
        isDropdown: false,
        to: '/pul-siyaseti/analysis-files',
      },
      {
        id: getIdFromString('pulsiyaseti-instruments'),
        title: 'Pul Siyasəti Alətləri və Pul Bazarı',
        isDropdown: false,
        to: '/pul-siyaseti/MonetaryPolicyInstrument',
      },
    ],
  },
  {
    id: getIdFromString('carier'),
    title: 'Karyera',
    route: '',
    activeIcon: <FaSortAmountUp fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('cariervacations'),
        title: 'Vakansiyalar',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('carier-vacations'),
            title: 'Vakansiya Əlavə Et',
            isDropdown: false,
            to: '/carier/vacations/vacation',
          },
          {
            id: getIdFromString('carier-vacations-detail'),
            title: 'Vakansiya Daxili Əlavə Et',
            isDropdown: false,
            to: '/carier/vacations/vacation/detail',
          },
        ],
      },
      {
        id: getIdFromString('carierinternships'),
        title: 'Təcrübə Proqramları',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('carier-intern-captions'),
            title: 'Başlıqlar',
            isDropdown: false,
            to: '/carier/intern/captions',
          },
          {
            id: getIdFromString('carier-intern-directions'),
            title: 'Məlumatlar',
            isDropdown: false,
            to: '/carier/intern/directions',
          },
          {
            id: getIdFromString('carier-intern-program'),
            title: 'Proqramlar',
            isDropdown: false,
            to: '/carier/intern/program',
          },
          {
            id: getIdFromString('carier-intern-volunteer'),
            title: 'Könüllü',
            isDropdown: false,
            to: '/carier/intern/volunteer',
          },
        ],
      },
      {
        id: getIdFromString('carier-captions'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/carier/captions',
      },
      {
        id: getIdFromString('carier-department'),
        title: 'Department',
        isDropdown: false,
        to: '/carier/department',
      },
      {
        id: getIdFromString('carier-branch'),
        title: 'Şöbə',
        isDropdown: false,
        to: '/carier/branch',
      },
      {
        id: getIdFromString('carier-position'),
        title: 'Vəzifə',
        isDropdown: false,
        to: '/carier/position',
      },
    ],
  },
  {
    id: getIdFromString('nakhcivan'),
    title: 'Naxçıvan Muxtar Respublikası İdarəsi',
    route: '',
    activeIcon: <MdLocationOn fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('statistical-bulletin'),
        title: 'Statistik Bülleten',
        isDropdown: false,
        to: '/nakhcivan/statistical-bulletin',
      },
      {
        id: getIdFromString('statistical-neshr'),
        title: 'Statistik Nəşrlər',
        isDropdown: false,
        to: '/nakhcivan/statistical-publication',
      },
      {
        id: getIdFromString('nakhcivan-blog'),
        title: 'Heydər Əliyev - 100 İl',
        isDropdown: false,
        to: '/nakhcivan/blog',
      },
      {
        id: getIdFromString('nakhcivan-events'),
        title: 'Tədbirlər',
        isDropdown: false,
        to: '/nakhcivan/events',
      },
      {
        id: getIdFromString('nakhcivan-contact'),
        title: 'Əlaqə',
        isDropdown: false,
        to: '/nakhcivan/contact',
      },
    ],
  },
  {
    id: getIdFromString('customer-rights'),
    title: 'İstehlakçıların və İnvestorların Hüquqlərı',
    route: '',
    activeIcon: <MdPolicy fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('customer-rights-captions'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/customer-rights/captions',
      },
      {
        id: getIdFromString('vetendash-muracieti-dropdown'),
        isDropdown: true,
        title: 'Vətəndaş Müraciəti',
        dropdownItems: [
          {
            id: getIdFromString('customer-rights-citizen'),
            title: 'Vətəndaş Müraciəti Kateqoriyası',
            isDropdown: false,
            to: '/customer-rights/citizencategory',
          },
          {
            id: getIdFromString('citizen-application'),
            title: 'Vətəndaş Müraciəti',
            isDropdown: false,
            to: '/customer-rights/citizenapplication',
          },
        ],
      },
      {
        id: getIdFromString('infographic'),
        title: 'İnfoqrafika',
        isDropdown: false,
        to: '/customer-rights/infographic',
      },
      {
        id: getIdFromString('payment-services'),
        title: 'Ödəniş Xidmətləri',
        isDropdown: false,
        to: '/customer-rights/payment-services',
      },
      {
        id: getIdFromString('information-bulletin'),
        title:
          'İstehlakçıların Hüquqlarının Müdafiəsi və Maliyyə Savadlılığı üzrə İnformasiya Bülleteni',
        isDropdown: false,
        to: '/customer-rights/information-bulletin',
      },
      {
        id: getIdFromString('complaint-index'),
        title: 'Şikayət İndeksi',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('complaint-index-category'),
            title: 'Kateqoriya',
            isDropdown: false,
            to: '/customer-rights/complaint-index/category',
          },
          {
            id: getIdFromString('complaint-index-data'),
            title: 'Şikayət İndeksləri',
            isDropdown: false,
            to: '/customer-rights/complaint-index/complaintindex',
          },
          {
            id: getIdFromString('customer-events'),
            title: 'Müştəri Hadisələri',
            isDropdown: false,
            to: '/customer-rights/customer-events',
          },
          {
            id: getIdFromString('customer-document'),
            title: 'Müştəri Sənədi',
            isDropdown: false,
            to: '/customer-rights/customer-document',
          },
        ],
      },
    ],
  },
  {
    id: getIdFromString('payment-systems'),
    title: 'Ödəniş Sistemləri',
    route: '',
    activeIcon: <RiSecurePaymentLine fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('payment-systems-captions'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/payment-systems/PaymentSystemCaption',
      },
      {
        id: getIdFromString('Real-Vaxt-Rejimində-Hesablaşmalar-Sistemi'),
        title: 'Real Vaxt Hesablaşmalar Sistemi',
        isDropdown: false,
        to: '/payment-systems/RealTimeSettlementSystem',
      },
      {
        id: getIdFromString('müxbir-hesabi'),
        title: 'Müxbir Hesabı',
        isDropdown: false,
        to: '/payment-systems/CorrespondentAccount',
      },
      {
        id: getIdFromString('texniki-senedler'),
        title: 'Texniki Sənədlər',
        isDropdown: false,
        to: '/payment-systems/TechnicalDocument',
      },
      {
        id: getIdFromString('proqram-teminati'),
        title: 'Proqram Təminatı',
        isDropdown: false,
        to: '/payment-systems/Software',
      },
      {
        id: getIdFromString('ani-odenis-sistemi'),
        title: 'Ani Ödəniş Sistemi',
        isDropdown: false,
        to: '/payment-systems/InstantPaymentSystemControlFileler',
      },
      {
        id: getIdFromString('ani-odenis-sistemi-posts'),
        title: 'Ani Ödəniş Sistemi Postları',
        isDropdown: false,
        to: '/payment-systems/InstantPaymentPost',
      },
      {
        id: getIdFromString('InstantPaymentOrganization'),
        title: 'Ani Ödəniş Təşkilatları',
        isDropdown: false,
        to: '/payment-systems/InstantPaymentOrganization',
      },
      {
        id: getIdFromString('InstantPaymentFaq'),
        title: 'Tez-Tez Verilən Suallar',
        isDropdown: false,
        to: '/payment-systems/instantPaymentFAQ',
      },
      {
        id: getIdFromString('Regulation'),
        title: 'Tənzimləmə',
        isDropdown: false,
        to: '/payment-systems/Regulation',
      },
      {
        id: getIdFromString('Tariff'),
        title: 'Reqlament və Tariflər',
        isDropdown: false,
        to: '/payment-systems/Tariff',
      },
      {
        id: getIdFromString('ParticipantCategory'),
        title: 'İştirakçı Kateqoriyası',
        isDropdown: false,
        to: '/payment-systems/ParticipantCategory',
      },
      {
        id: getIdFromString('Participant'),
        title: 'İştirakçılar',
        isDropdown: false,
        to: '/payment-systems/Participant',
      },
      {
        id: getIdFromString('PaymentSystemStandarts'),
        title: 'Ödəniş Sistemi Standartları',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('PaymentSystemStandart-PaymentSystemStandarts'),
            title: 'Standartlar',
            isDropdown: false,
            to: '/payment-systems/standarts/PaymentSystemStandart',
          },
          {
            id: getIdFromString('PaymentSystemStandart-PaymentSystemStandartsFiles'),
            title: 'Fayllar',
            isDropdown: false,
            to: '/payment-systems/standarts/PaymentSystemStandartFile',
          },
          {
            id: getIdFromString('PaymentSystemStandart-PaymentSystemStandartsFAQ'),
            title: 'Tez-Tez Verilən Suallar (FAQ)',
            isDropdown: false,
            to: '/payment-systems/standarts/faq',
          },
        ],
      },
      {
        id: getIdFromString('dovletproqramlari'),
        title: 'Dövlət Proqramları',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('dovletproqramlari-captions'),
            title: 'Başlıqlar',
            isDropdown: false,
            to: '/payment-systems/state-programs/captions',
          },
          {
            id: getIdFromString('dovletproqramlari-categories'),
            title: 'Kateqoriyalar',
            isDropdown: false,
            to: '/payment-systems/state-programs/categories',
          },
          {
            id: getIdFromString('dovletproqramlari-StateProgram'),
            title: 'Dövlət Proqramı',
            isDropdown: false,
            to: '/payment-systems/state-programs/StateProgram',
          },
        ],
      },
      {
        id: getIdFromString('digitalpayment'),
        title: 'Rəqəmsal Ödəniş',
        isDropdown: false,
        to: '/payment-systems/DigitalPayment',
      },
      {
        id: getIdFromString('nominationcaption'),
        title: 'Nominasiyalar Başlığı',
        isDropdown: false,
        to: '/payment-systems/NominationCaption',
      },
      {
        id: getIdFromString('nominationcategories'),
        title: 'Nominasiyalar Kateqoriyası',
        isDropdown: false,
        to: '/payment-systems/NominationCategory',
      },
      {
        id: getIdFromString('nomination'),
        title: 'Nominasiyalar',
        isDropdown: false,
        to: '/payment-systems/Nomination',
      },
      {
        id: getIdFromString('lottery_dropdown'),
        title: 'Lotereyalar və Kampaniyalar',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('lottery'),
            title: 'Lotereyalar',
            isDropdown: false,
            to: '/payment-systems/Lottery',
          },
          {
            id: getIdFromString('lotteryFile'),
            title: 'Fayllar',
            isDropdown: false,
            to: '/payment-systems/LotteryFile',
          },
          {
            id: getIdFromString('lotteryVideo'),
            title: 'Video',
            isDropdown: false,
            to: '/payment-systems/LotteryVideo',
          },
          {
            id: getIdFromString('lottery-faq'),
            title: 'Tez-tez Verilən Suallar',
            isDropdown: false,
            to: '/payment-systems/LotteryFAQ',
          },
        ],
      },
      {
        id: getIdFromString('controlfile'),
        title: 'Ödəniş Sistemi Nəzarəti',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('controlfilemain'),
            title: 'Nəzarət',
            isDropdown: false,
            to: '/payment-systems/PaymentSystemControl',
          },
          {
            id: getIdFromString('controlfileFiles'),
            title: 'Fayllar',
            isDropdown: false,
            to: '/payment-systems/PaymentSystemControlFile',
          },
          {
            id: getIdFromString('controlService'),
            title: 'Ödəniş Sistemi Nəzarət Xidməti',
            isDropdown: false,
            to: '/payment-systems/PaymentSystemControlService',
          },
        ],
      },
      {
        id: getIdFromString('digitalpaymentreview'),
        title: 'Rəqəmsal Ödəniş Baxışı',
        isDropdown: false,
        to: '/payment-systems/DigitalPaymentReview',
      },
    ],
  },
  {
    id: getIdFromString('financal-stability'),
    title: 'Maliyyə Sabitliyi',
    route: '',
    activeIcon: <MdOutlinePayments fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('Financial-Stability-Caption'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/financial-stability/FinancialStabilityCaption',
      },
      {
        id: getIdFromString('Financial-Stabilityreport-Caption'),
        title: 'Hesabat Başlığı',
        isDropdown: false,
        to: '/financial-stability/FinancialStabilityReportCaption',
      },
      {
        id: getIdFromString('Financial-Stabilityreport'),
        title: 'Maliyyə Sabitliyi Hesabatı',
        isDropdown: false,
        to: '/financial-stability/FinancialStabilityReport',
      },
      {
        id: getIdFromString('Financial-Stabilityreport'),
        title: 'Makroprudensial Siyasət Çərçivəsi',
        isDropdown: false,
        to: '/financial-stability/MacroprudentialPolicyFrameworkCaption',
      },
      {
        id: getIdFromString('Financial-Stabilityreport'),
        title: 'Makroprudensial Alətlərin Siyahısı',
        isDropdown: false,
        to: '/financial-stability/MacroprudentialPolicyFramework',
      },
      {
        id: getIdFromString('FinancialInstitution'),
        title: 'Maliyyə Təşkilatı',
        isDropdown: false,
        to: '/financial-stability/FinancialInstitution',
      },
      {
        id: getIdFromString('FinancingActivityCaption'),
        title: 'Maliyyələşdirmə Fəaliyyəti Başlığı',
        isDropdown: false,
        to: '/financial-stability/FinancingActivityCaption',
      },
      {
        id: getIdFromString('FinancingActivity'),
        title: 'Maliyyələşdirmə Fəaliyyəti',
        isDropdown: false,
        to: '/financial-stability/FinancingActivity',
      },
      {
        id: getIdFromString('RoadmapSustainableFinance'),
        title: 'Dayanıqlı Maliyyə Üzrə Yol Xəritəsi',
        isDropdown: false,
        to: '/financial-stability/RoadmapSustainableFinance',
      },
      {
        id: getIdFromString('GreenTaxonomy'),
        title: 'Yaşıl Taksonomiya',
        isDropdown: false,
        to: '/financial-stability/GreenTaxonomy',
      },
      {
        id: getIdFromString('RegulationControl'),
        title: 'Tənzimləmə və Nəzarət',
        isDropdown: false,
        to: '/financial-stability/RegulationControl',
      },
      {
        id: getIdFromString('Disclosure'),
        title: 'Açıqlama',
        isDropdown: false,
        to: '/financial-stability/Disclosure',
      },
      {
        id: getIdFromString('FinancialEvent'),
        title: 'Tədbirlər',
        isDropdown: false,
        to: '/financial-stability/FinancialEvent',
      },
    ],
  },
  {
    id: getIdFromString('international-cooperation'),
    title: 'Beynəlxalq Əməkdaşlıq',
    route: '',
    activeIcon: <GiEarthAmerica fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('InternationalCooperationInitiative'),
        title: 'Beynəlxalq Əməkdaşlıq Təşəbbüsü',
        isDropdown: false,
        to: '/international-cooperation/InternationalCooperationInitiative',
      },
      {
        id: getIdFromString('InternationalCooperationCaption'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/international-cooperation/InternationalCooperationCaption',
      },
      {
        id: getIdFromString('InternationalFinancialOrganization'),
        title: 'Beynəlxalq Maliyyə Təşkilatı',
        isDropdown: false,
        to: '/international-cooperation/InternationalFinancialOrganization',
      },
      {
        id: getIdFromString('InternationalEvent'),
        title: 'Beynəlxalq Tədbir',
        isDropdown: false,
        to: '/international-cooperation/InternationalEvent',
      },
      {
        id: getIdFromString('MembershipInternationalOrganization'),
        title: 'Beynəlxalq Təşkilata Üzvlük',
        isDropdown: false,
        to: '/international-cooperation/MembershipInternationalOrganization',
      },
      {
        id: getIdFromString('centralbank-dropdown'),
        title: 'Mərkəzi Bank',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('centralbank-captions'),
            title: 'Əməkdaşlıq Başlıqları',
            to: '/international-cooperation/CentralBankCooperationCaption',
          },
          {
            id: getIdFromString('centralbank-CentralBankCooperation'),
            title: 'Əməkdaşlıq',
            to: '/international-cooperation/CentralBankCooperation',
          },
        ],
      },
    ],
  },
  {
    id: getIdFromString('financal-innovation'),
    title: 'Maliyyə Texnologiyaları və İnnovasiyalar',
    route: '',
    activeIcon: <MdOutlineMoney fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('openbanking'),
        title: 'Açıq Bankçılıq',
        isDropdown: false,
        to: '/financial-innovation/OpenBanking',
      },
      {
        id: getIdFromString('openbankingfile'),
        title: 'Açıq Bankçılıq - Fayllar',
        isDropdown: false,
        to: '/financial-innovation/OpenBankingFile',
      },
      {
        id: getIdFromString('CustomEditingMode'),
        title: 'Xüsusi Tənzimləmə Rejimi',
        isDropdown: false,
        to: '/financial-innovation/CustomEditingMode',
      },
      {
        id: getIdFromString('VirtualActive'),
        title: 'Virtual Aktivlər',
        isDropdown: false,
        to: '/financial-innovation/VirtualActive',
      },
      {
        id: getIdFromString('EKYC'),
        title: 'Paylanılmış Öz Müştərini Tanı Platforması- EKYC',
        isDropdown: false,
        to: '/financial-innovation/EKYC',
      },
      {
        id: getIdFromString('mbrb'),
        title: 'Mərkəzi Bankın Rəqəmsal Valyutası - MBRB',
        isDropdown: false,
        to: '/financial-innovation/CBDC',
      },
    ],
  },
  {
    id: getIdFromString('financal-innovation'),
    title: 'Maliyyə Savadlılığı',
    route: '',
    activeIcon: <GiTakeMyMoney fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('FinancialLiteracyCaption'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/financial-literacy/FinancialLiteracyCaption',
      },
      {
        id: getIdFromString('FinancialLiteracyEventCaption'),
        title: 'Tədbir Başlığı',
        isDropdown: false,
        to: '/financial-literacy/FinancialLiteracyEventCaption',
      },
      {
        id: getIdFromString('FinancialLiteracyPortalCaption'),
        title: 'Portal Başlığı',
        isDropdown: false,
        to: '/financial-literacy/FinancialLiteracyPortalCaption',
      },
      {
        id: getIdFromString('FinancialSearchSystemCaption'),
        title: 'Axtarış Sistemi Başlığı',
        isDropdown: false,
        to: '/financial-literacy/FinancialSearchSystemCaption',
      },
      {
        id: getIdFromString('FinancialLiteracyEvent'),
        title: 'Maliyyə Savadlılığı Tədbiri',
        isDropdown: false,
        to: '/financial-literacy/FinancialLiteracyEvent',
      },
      {
        id: getIdFromString('FinancialLiteracyPortal'),
        title: 'Maliyyə Savadlılığı Portalı',
        isDropdown: false,
        to: '/financial-literacy/FinancialLiteracyPortal',
      },
      {
        id: getIdFromString('VirtualEducation'),
        title: 'Virtual Təhsil',
        isDropdown: false,
        to: '/financial-literacy/VirtualEducation',
      },
      {
        id: getIdFromString('FinancialSearchSystem'),
        title: 'Maliyyə Axtarış Sistemi',
        isDropdown: false,
        to: '/financial-literacy/FinancialSearchSystem',
      },
    ],
  },
  {
    id: getIdFromString('publications'),
    title: 'Nəşrlər və Tədqiqatlar',
    route: '',
    activeIcon: <MdOutlineMenuBook fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('PublicationCaption'),
        title: 'Başlıqlar',
        isDropdown: false,
        to: '/publications/PublicationCaption',
      },
      {
        id: getIdFromString('econometricmodel_dropdown'),
        title: 'Ekonometrik Model',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('EconometricModel'),
            title: 'Ekonometrik Model',
            isDropdown: false,
            to: '/publications/EconometricModel',
          },
          {
            id: getIdFromString('EconometricModelFile'),
            title: 'Ekonometrik Model - Fayllar',
            isDropdown: false,
            to: '/publications/EconometricModelFile',
          },
        ],
      },
      {
        id: getIdFromString('annualreport_dropdown'),
        title: 'İşçilər Məqaləsi',
        isDropdown: true,
        dropdownItems: [
          {
            id: getIdFromString('StaffArticle'),
            title: 'İşçilər Məqaləsi',
            isDropdown: false,
            to: '/publications/StaffArticle',
          },
          {
            id: getIdFromString('StaffArticleCaption'),
            title: 'İşçilər Məqaləsi Başlığı',
            isDropdown: false,
            to: '/publications/StaffArticleCaption',
          },
          {
            id: getIdFromString('StaffArticleFile'),
            title: 'İşçilər Məqaləsi - Fayllar',
            isDropdown: false,
            to: '/publications/staffArticleFile',
          },
        ],
      },
      {
        id: getIdFromString('AnnualReport'),
        title: 'İllik Hesabat',
        isDropdown: false,
        to: '/publications/AnnualReport',
      },
      {
        id: getIdFromString('FinancialFlow'),
        title: 'Maliyyə Axını',
        isDropdown: false,
        to: '/publications/FinancialFlow',
      },
      {
        id: getIdFromString('MicrofinanceModel'),
        title: 'Mikromaliyyə Modeli',
        isDropdown: false,
        to: '/publications/MicrofinanceModel',
      },
      {
        id: getIdFromString('CybersecurityStrategy'),
        title: 'Kibertəhlükəsizlik Strategiyası',
        isDropdown: false,
        to: '/publications/CybersecurityStrategy',
      },
      {
        id: getIdFromString('PolicyConcept'),
        title: 'Siyasət Konsepsiyası',
        isDropdown: false,
        to: '/publications/PolicyConcept',
      },
      {
        id: getIdFromString('RoadmapOverview'),
        title: 'Yol Xəritəsinə Baxış',
        isDropdown: false,
        to: '/publications/RoadmapOverview',
      },
    ],
  },
  {
    id: getIdFromString('meas'),
    title: 'Məlumatların Elektron Açıqlanması Sistemi (MEAS)',
    route: '',
    activeIcon: <IoLogoElectron fontSize={24} />,
    isDropdownRoute: true,
    dropdowns: [
      {
        id: getIdFromString('MeasAbout'),
        title: 'MEAS - Haqqında',
        isDropdown: false,
        to: '/meas/about',
      },
      {
        id: getIdFromString('MeasInfoType'),
        title: 'MEAS - Məlumat Növü',
        isDropdown: false,
        to: '/meas/information-type',
      },
      {
        id: getIdFromString('MeasIssuerType'),
        title: 'MEAS - Emitent Növü',
        isDropdown: false,
        to: '/meas/issuer-type',
      },
      {
        id: getIdFromString('MeasSecurityType'),
        title: 'MEAS - Qiymətli Kağız Növü',
        isDropdown: false,
        to: '/meas/security-type',
      },
      {
        id: getIdFromString('MeasMain'),
        title: 'Məlumatların Elektron Açıqlanması Sistemi (MEAS)',
        isDropdown: false,
        to: '/meas/MEAS',
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
  {
    id: getIdFromString('financaldevelopment'),
    title: 'Maliyyə Sektorunun İnkişaf Strategiyası',
    route: '/financal-development',
    activeIcon: <IoDocumentTextOutline fontSize={24} />,
    isDropdownRoute: false,
  },
];
