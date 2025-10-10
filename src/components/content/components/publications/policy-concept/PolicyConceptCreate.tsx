import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PolicyConceptCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/PolicyConcept"
        title="Nəşrlər və Tədqiqatlar - Siyasət Konsepsiyası"
        endpoint="PolicyConcept"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.docx,.doc,.word,.pdf',
          },
        ]}
        loadingKey="PolicyConcept_loading"
      />
    </Box>
  );
};

export default PolicyConceptCreate;
