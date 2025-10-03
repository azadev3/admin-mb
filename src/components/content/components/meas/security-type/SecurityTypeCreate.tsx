import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const SecurityTypeCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/meas/security-type"
        title="MEAS - Qiymətli Kağız Növü"
        endpoint="securitytype"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="securitytype_loading"
      />
    </Box>
  );
};

export default SecurityTypeCreate;
