import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PosterCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/poster"
        title="Pul Siyasəti - Posterlər"
        endpoint="poster"
        contentType="multipart/form-data"
        fields={[
          {
            label: 'File',
            name: 'file',
            type: 'file',
            multilang: false,
          },
        ]}
        loadingKey="poster_loading"
      />
    </Box>
  );
};

export default PosterCreate;
