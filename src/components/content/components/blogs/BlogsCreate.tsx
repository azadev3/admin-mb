import { Box } from '@chakra-ui/react';
import { MainSeoSchema } from '../../../../shared/MainSchemaConfig';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const BlogsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/xeberler"
        title="Ana Səhifə - Xəbərlər bölməsi"
        contentType="multipart/form-data"
        endpoint="blog"
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

export default BlogsCreate;
