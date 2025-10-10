import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const VideosEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/videolar"
        title="Media - Videolar bölməsi"
        contentType="multipart/form-data"
        endpoint="video"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Tarix', name: 'Date', type: 'date' },
          { label: 'URL', name: 'Url', type: 'text' },
          {
            label: 'Video Fayl yaxud Şəkil',
            name: 'File',
            type: 'file',
            accept: 'image/*,video/*',
          },
        ]}
        loadingKey="videos_loading"
      />
    </Box>
  );
};

export default VideosEdit;
