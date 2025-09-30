import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';
import { MainSeoSchema } from '../../../../shared/MainSchemaConfig';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../hooks/useLanguages';
import LanguageTabs from '../../../../shared/form/LanguageTabs';

const FocusEdit: React.FC = () => {
  const { id } = useParams();
  const { activeLang, languages, setActiveLang } = useLanguages();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/fokus" title="Ana Səhifə - Fokus bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        id={Number(id)}
        type="edit"
        endpoint="Blog"
        contentType="multipart/form-data"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Tarix', name: 'Date', type: 'date', multilang: false },
          {
            label:
              'Fokuslanmış? (Əgər bu xəbəri saytda ön sıraya çıxarmaq istəyirsinizsə, seçin.)',
            name: 'IsFocused',
            type: 'boolean',
            multilang: false,
          },
          ...MainSeoSchema,
          { label: 'Əsas Şəkil', name: 'ImageFile', type: 'file', multilang: false },
          {
            label: 'Digər Şəkillər',
            name: 'files',
            type: 'multi-file',
            multilang: false,
          },
        ]}
        loadingKey="focus_loading"
      />
    </Box>
  );
};

export default FocusEdit;
