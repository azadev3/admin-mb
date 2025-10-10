import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const VirtualActiveCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-innovation/VirtualActive"
        title="Finansal İnnovasiya - Virtual Aktivlər"
        contentType="application/json"
        endpoint="VirtualActive"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="VirtualActive_loading"
      />
    </Box>
  );
};

export default VirtualActiveCreate;
