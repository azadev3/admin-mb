import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PublicationCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/PublicationCaption"
        title="Nəşrlər və Tədqiqatlar - Başlıq"
        contentType="application/json"
        endpoint="PublicationCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="PublicationCaption_loading"
      />
    </Box>
  );
};

export default PublicationCaptionCreate;
