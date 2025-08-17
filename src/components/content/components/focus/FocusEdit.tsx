import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { MainSeoSchema } from '../../../../helpers/MainSchemaConfig';
import { useParams } from 'react-router-dom';

const FocusEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/fokus" title="Ana Səhifə - Fokus bölməsi" />
      <FormField
        type="edit"
        endpoint="Blog"
        id={Number(id)}
        fields={[
          { label: 'Əsas Şəkil', name: 'ImageFile', type: 'file' },
          { label: 'Digər Şəkillər', name: 'ImagesList', type: 'multi-file' },
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'Slug (AZ)', name: 'SlugAz', type: 'text' },
          { label: 'Slug (EN)', name: 'SlugEn', type: 'text' },
          { label: 'Açıqlama (AZ)', name: 'DescriptionAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'DescriptionEn', type: 'text' },
          { label: 'Tarix', name: 'Date', type: 'date' },
          {
            label:
              'Fokuslanmış? (Əgər bu xəbəri saytda ön sıraya çıxarmaq istəyirsinizsə, seçin.)',
            name: 'IsFocused',
            type: 'boolean',
          },
          ...MainSeoSchema,
        ]}
        loadingKey="focus_loading"
      />
    </Box>
  );
};

export default FocusEdit;
