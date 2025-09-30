import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MonetaryPolicyCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/captions"
        title="Pul Siyasəti - Başlıq Əlavə Et"
        endpoint="monetarypolicycaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="monetarypolicycaption_loading"
      />
    </Box>
  );
};

export default MonetaryPolicyCaptionsCreate;
