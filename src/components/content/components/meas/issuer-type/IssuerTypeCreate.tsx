import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const IssuerTypeCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/meas/issuer-type"
        title="MEAS - Emitent Növü"
        endpoint="issuertype"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="issuertype_loading"
      />
    </Box>
  );
};

export default IssuerTypeCreate;
