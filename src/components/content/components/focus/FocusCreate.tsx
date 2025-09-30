import { Box } from '@chakra-ui/react';
import { MainSeoSchema } from '../../../../shared/MainSchemaConfig';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const FocusCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/fokus"
        title="Ana Səhifə - Fokus bölməsi"
        contentType="multipart/form-data"
        endpoint="Blog"
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

export default FocusCreate;
