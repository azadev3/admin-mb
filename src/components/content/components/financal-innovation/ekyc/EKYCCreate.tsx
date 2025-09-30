import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const EKYCCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-innovation/EKYC"
        title="Finansal İnnovasiya - EKYC"
        contentType="application/json"
        endpoint="EKYC"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="EKYC_loading"
      />
    </Box>
  );
};

export default EKYCCreate;
