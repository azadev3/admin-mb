import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../hooks/useLanguages';
import FormField from '../../../../shared/form/FormField';
import LanguageTabs from '../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const FinancalDevelopmentCreate: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financal-development"
        title="Maliyyə Sektorunun İnkişaf Strategiyası - Məlumat Əlavə Et"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="financialdevelopment"
        activeLang={activeLang}
        languages={languages}
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl Head Title',
            name: 'fileHeadTitle',
            type: 'text',
            multilang: true,
          },
          { label: 'Fayl Başlığı', name: 'fileTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
          },
          {
            label: 'Şəkil',
            name: 'ImageFile',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="financialdevelopment_loading"
      />
    </Box>
  );
};

export default FinancalDevelopmentCreate;
