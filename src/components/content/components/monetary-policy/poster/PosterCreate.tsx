import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const PosterCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/pul-siyaseti/poster"
        title="Pul Siyasəti - Posterlər"
      />
      <FormField
        type="create"
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
