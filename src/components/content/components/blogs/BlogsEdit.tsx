import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';
import { MainSeoSchema } from '../../../../shared/MainSchemaConfig';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../hooks/useLanguages';
import LanguageTabs from '../../../../shared/form/LanguageTabs';

const BlogsEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/xeberler" title="Ana Səhifə - Xəbərlər bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        id={Number(id)}
        endpoint="blog"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Əsas Şəkil', name: 'ImageFile', type: 'file' },
          { label: 'Digər Şəkillər', name: 'Files', type: 'multi-file' },
          { label: 'Tarix', name: 'date', type: 'date' },
          {
            label:
              'Fokuslanmış? (Əgər bu xəbəri saytda ön sıraya çıxarmaq istəyirsinizsə, seçin.)',
            name: 'IsFocused',
            type: 'boolean',
          },
          ...MainSeoSchema,
        ]}
        loadingKey="blogs_loading"
      />
    </Box>
  );
};

export default BlogsEdit;
