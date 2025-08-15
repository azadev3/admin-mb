import { CiHome, CiSettings } from 'react-icons/ci';
import type { RoutesInterface } from '../../types/sidebar/routeType';
import { FaHouse } from 'react-icons/fa6';

export const useSidebarRoutes = () => {
  const routes: RoutesInterface[] = [
    {
      id: 1,
      title: 'Əsas',
      route: '/',
      activeIcon: <FaHouse />,
      isDropdownRoute: false,
    },
    {
      id: 2,
      title: 'Sayt Tənzimləmələri',
      route: '/logo',
      activeIcon: <CiSettings fontSize={24} />,
      isDropdownRoute: true,
      dropdowns: [{ id: 1, title: 'Loqonu Dəyiş', to: '/logo' }],
    },
    {
      id: 3,
      title: 'Ana Səhifə',
      route: '/site/homepage',
      activeIcon: <CiHome fontSize={24} />,
      isDropdownRoute: true,
      dropdowns: [
        { id: 4, title: 'Hero Bölməsi', to: '/site/homepage/hero' },
        {
          id: 5,
          title: 'Hero Kartlar',
          to: '/site/homepage/hero-cards',
          isDropdown: true,
          dropdownItems: [
            { id: 6, title: 'AZN Məzənnəsi', to: '/aznmezennesi' },
            { id: 7, title: 'Faiz Dəhlizi', to: '/faizdehlizi' },
            { id: 8, title: 'İnflasiya', to: '/inflasiya' },
            {
              id: 9,
              title: 'Monetar Göstəricilər',
              to: '/monetargostericiler',
            },
          ],
        },
        {
          id: 10,
          title: 'Mərkəzi Bankın Notları',
          to: '/site/homepage/merkezibanknotlari',
        },
        {
          id: 11,
          title: 'Gəlirlilik əyrisi',
          to: '/site/homepage/merkezibanknotlari2',
        },
        {
          id: 12,
          title: 'Pul Bazarı',
          to: '/site/homepage/merkezibanknotlari3',
        },
        {
          id: 13,
          title: 'Xəbər Bölməsi',
          isDropdown: true,
          dropdownItems: [
            { id: 14, title: 'Fokus', to: '/fokus' },
            { id: 15, title: 'Xəbərlər', to: '/fokus2' },
            { id: 16, title: 'Elanlar', to: '/fokus3' },
            { id: 17, title: 'Müsahibələr və Çıxışlar', to: '/fokus4' },
          ],
        },
        {
          id: 18,
          title: 'P/Onlayn Xidmət Sistemləri',
          isDropdown: true,
          dropdownItems: [
            { id: 19, title: 'Başlıq Hissəni Dəyiş', to: '/changetp' },
            { id: 20, title: 'Elektron Xidmətlər Portalı', to: '/1223' },
            { id: 21, title: 'Maliyyə Savadlılığı Portalı', to: '/1223' },
            { id: 22, title: 'YXPN Onlayn Satış Sistemi.', to: '/1223' },
          ],
        },
        {
          id: 23,
          title: 'Şəkil / Videolar',
          isDropdown: true,
          dropdownItems: [
            { id: 24, title: 'Şəkillər', to: '/images' },
            { id: 25, title: 'Videolar', to: '/videos' },
          ],
        },
        {
          id: 26,
          title: 'Makroiqtisadi Sənədlər',
          to: '/maktr0ekOJdij',
        },
        {
          id: 27,
          title: 'Digər Məlumatlar',
          to: '/other-informations',
        },
      ],
    },
  ];

  return {
    routes,
  };
};
