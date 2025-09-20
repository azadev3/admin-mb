import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';

export const TypesForDirector = [
  { label: 'Sədr', value: 1 },
  { label: 'Sədr Müavini', value: 2 },
  { label: 'Rəhbərlik', value: 3 },
];

const DirectorCreate: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/idareetme-direktorlar"
        title="Haqqımızda - Direktorlar"
      />
      <LanguageTabs
        languages={languages}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="director"
        languages={languages}
        activeLang={activeLang}
        fields={[
          {
            label: 'Başlıq',
            name: 'fullname',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Pozisiya',
            name: 'position',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
          {
            label: 'Rəhbər Növü',
            name: 'type',
            multilang: false,
            type: 'select',
            options: TypesForDirector,
          },
        ]}
        loadingKey="Director_loading"
      />
    </Box>
  );
};

export default DirectorCreate;
