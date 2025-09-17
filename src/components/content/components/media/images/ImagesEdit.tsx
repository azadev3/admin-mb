import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../../shared/form/FormField';
import { MainSeoSchema } from '../../../../../shared/MainSchemaConfig';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const ImagesEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/sekiller" title="Media - Şəkillər bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        contentType="multipart/form-data"
        endpoint="gallery"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true, },
          { label: 'date', name: 'Date', type: 'date' },
          { label: 'Şəkil', name: 'ImageFile', type: 'file' },
          { label: 'Digər Şəkillər', name: 'Files', type: 'multi-file' },
          ...MainSeoSchema,
        ]}
        loadingKey="gallery_loading"
      />
    </Box>
  );
};

export default ImagesEdit;
