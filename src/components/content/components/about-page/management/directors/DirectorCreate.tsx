import { Box } from '@chakra-ui/react';
import FormField from '../../../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

export const TypesForDirector = [
  { label: 'Sədr', value: 1 },
  { label: 'Sədr Müavini', value: 2 },
  { label: 'Rəhbərlik', value: 3 },
];

const DirectorCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/idareetme-direktorlar"
        title="Haqqımızda - Direktorlar"
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="Director"
        fields={[
          {
            label: 'Ad / Soyad (AZ)',
            name: 'FullNameAz',
            type: 'text',
            placeholder: 'Məsələn: Əliyar Qəhrəman oğlu Məmmədyarov',
          },
          {
            label: 'Ad / Soyad (EN)',
            name: 'FullNameEn',
            type: 'text',
            placeholder: 'Məsələn: Aliyar Gahraman oglu Mammadyarov',
          },
          {
            label: 'Slug (AZ)',
            name: 'SlugAz',
            type: 'text',
            placeholder: 'Məsələn: eliyar-qehreman-oglu-memmedyarov',
          },
          {
            label: 'Slug (EN)',
            name: 'SlugEn',
            type: 'text',
            placeholder: 'Məsələn: aliyar-gahraman-oglu-mammdyarov',
          },
          {
            label: 'Pozisiya (AZ)',
            name: 'PositionAz',
            type: 'text',
            placeholder: 'Məsələn: Sədrin birinci müavini',
          },
          {
            label: 'Pozisiya (EN)',
            name: 'PositionEn',
            type: 'text',
            placeholder: 'Məsələn: First Deputy Chairman',
          },
          {
            label: 'Qəbul günləri (AZ)',
            name: 'ReceptionDaysAz',
            type: 'text',
            placeholder: 'Məsələn: Hər ayın son cümə günü / saat 15.00-dan',
          },
          {
            label: 'Qəbul günləri (EN)',
            name: 'ReceptionDaysEn',
            type: 'text',
            placeholder: 'Məsələn: Last Friday of every month / from 3:00 PM',
          },
          {
            label: 'Doğum Tarixi (AZ)',
            name: 'BirthdayAz',
            type: 'text',
            placeholder: 'Məsələn: 01.01.1970',
          },
          {
            label: 'Doğum Tarixi (EN)',
            name: 'BirthdayEn',
            type: 'text',
            placeholder: 'Məsələn: January 1, 1970',
          },
          {
            label: 'Karyera (AZ)',
            name: 'CareerAz',
            type: 'text',
            placeholder: 'Məsələn: uzun illər idarəçilik təcrübəsi',
          },
          {
            label: 'Karyera (EN)',
            name: 'CareerEn',
            type: 'text',
            placeholder: 'Məsələn: extensive management experience',
          },
          {
            label: 'Ailə Həyatı (AZ)',
            name: 'FamilyAz',
            type: 'text',
            placeholder: 'Məsələn: 3 uşaq və həyat yoldaşı',
          },
          {
            label: 'Ailə Həyatı (EN)',
            name: 'FamilyEn',
            type: 'text',
            placeholder: 'Məsələn: 3 children and spouse',
          },
          {
            label: 'Telefon',
            name: 'Phone',
            type: 'text',
            placeholder: 'Məsələn: (+994 36) 550-59-10',
          },
          {
            label: 'Vəzifə Tipini Qeyd Edin',
            name: 'Type',
            type: 'select',
            options: TypesForDirector ?? [],
          },
          { label: 'Profil Şəkli', name: 'File', type: 'file' },
        ]}
        loadingKey="Director_loading"
      />
    </Box>
  );
};

export default DirectorCreate;
