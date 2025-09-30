import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MediaCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/mediacaption"
        title="Media - Açıqlamalar Əlavə Et"
        contentType="application/json"
        endpoint="mediacaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="mediacaption_loading"
      />
    </Box>
  );
};

export default MediaCaptionsCreate;
