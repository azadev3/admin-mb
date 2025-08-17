import { CiHome, CiSettings } from 'react-icons/ci';
import type { RoutesInterface } from '../../types/sidebar/routeType';
import { FaHouse } from 'react-icons/fa6';

const getIdFromString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export const useSidebarRoutes = () => {
  const routes: RoutesInterface[] = [
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
        { id: getIdFromString('Loqonu Dəyiş'), title: 'Loqonu Dəyiş', to: '/logo' },
        { id: getIdFromString('Sosial Linklər'), title: 'Sosial Linklər', to: '/sosial' },
        {
          id: getIdFromString('Telefonlar'),
          title: 'Footer - Əlaqə məlumatları',
          to: '/telefonlar',
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
        { id: getIdFromString('Hero Bölməsi'), title: 'Hero Bölməsi', to: '/hero' },
        {
          id: getIdFromString('Fokus & Xəbərlər b.'),
          title: 'Fokus & Xəbərlər b.',
          to: '',
          isDropdown: true,
          dropdownItems: [
            { id: getIdFromString('Fokus'), title: 'Fokus', to: '/fokus' },
            { id: getIdFromString('Xəbərlər'), title: 'Xəbərlər', to: '/xeberler' },
            { id: getIdFromString('Elanlar'), title: 'Elanlar', to: '/elanlar' },
            {
              id: getIdFromString('Müsahibələr və Çıxışlar'),
              title: 'Müsahibələr və Çıxışlar',
              to: '/musahibeler-ve-cixislar',
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
          id: getIdFromString('Şəkillər və Videolar'),
          title: 'Şəkillər və Videolar',
          to: '',
          isDropdown: true,
          dropdownItems: [
            { id: getIdFromString('Şəkillər'), title: 'Şəkillər', to: '/sekiller' },
            { id: getIdFromString('Videolar'), title: 'Videolar', to: '/videolar' },
          ],
        },
        {
          id: getIdFromString('Makroiqtisadi Sənədlər & Hesabatlar'),
          title: 'Makroiqtisadi Sənədlər & Hesabatlar',
          to: '/makroiqtisadi-senedler-ve-hesabatlar',
        },
      ],
    },
  ];

  return { routes };
};
