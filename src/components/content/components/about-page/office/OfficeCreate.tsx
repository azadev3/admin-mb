import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const OfficeCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/office" title="Office" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        activeLang={activeLang}
        languages={languages}
        contentType="multipart/form-data"
        endpoint="office"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Ünvan', name: 'addresse', type: 'text', multilang: true },
          {
            label: 'Sədr',
            name: 'chairmen',
            type: 'text',
            multilang: true,
            customPluralKey: "chairmen"
          },
          { label: 'Telefon', name: 'phone', type: 'number', multilang: false },
          {
            label: 'Şəkil',
            name: 'ImageFile',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
          {
            label: 'Digər Fayl',
            name: 'StatuteFile',
            type: 'file',
            multilang: false,
            accept: '.pdf',
          },
        ]}
        loadingKey="office_loading"
      />
    </Box>
  );
};

export default OfficeCreate;
