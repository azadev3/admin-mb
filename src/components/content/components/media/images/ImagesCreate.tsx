import { Box } from '@chakra-ui/react';
import FormField from '../../../../../shared/form/FormField';
import { MainSeoSchema } from '../../../../../shared/MainSchemaConfig';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const ImagesCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/sekiller" title="Media - Şəkillər bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="gallery"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Tarix', name: 'Date', type: 'date' },
          { label: 'Şəkil', name: 'ImageFile', type: 'file' },
          { label: 'Digər Şəkillər', name: 'Files', type: 'multi-file' },
          ...MainSeoSchema,
        ]}
        loadingKey="gallery_loading"
      />
    </Box>
  );
};

export default ImagesCreate;
