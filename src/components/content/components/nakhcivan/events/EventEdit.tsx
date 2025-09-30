import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const EventEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/nakhcivan/events"
        title="Naxçıvan Muxtar Respublikası İdarəsi - Hadisələr"
        endpoint="nakhchivanevent"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'multi-file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="nakhchivanevent_loading"
      />
    </Box>
  );
};

export default EventEdit;
