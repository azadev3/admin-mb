import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const VideosEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/videolar" title="Media - Videolar bölməsi" />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="Video"
        id={Number(id)}
        fields={[{ label: 'URL', name: 'url', type: 'text' }]}
        loadingKey="videos_loading"
      />
    </Box>
  );
};

export default VideosEdit;
