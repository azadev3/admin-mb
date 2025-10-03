import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CBDCCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-innovation/CBDC"
        title="Finansal İnnovasiya - CBDC"
        contentType="application/json"
        endpoint="CBDC"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="CBDC_loading"
      />
    </Box>
  );
};

export default CBDCCreate;
