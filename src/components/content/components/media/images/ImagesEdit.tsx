import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MainSeoSchema } from '../../../../../shared/MainSchemaConfig';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ImagesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/sekiller"
        title="Media - Şəkillər bölməsi"
        contentType="multipart/form-data"
        endpoint="gallery"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
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
