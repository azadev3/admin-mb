import { Box } from '@chakra-ui/react';
import FormField from '../../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const VideosCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/videolar" title="Media - Videolar bölməsi" />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="Video"
        fields={[{ label: 'URL', name: 'url', type: 'text' }]}
        loadingKey="videos_loading"
      />
    </Box>
  );
};

export default VideosCreate;
