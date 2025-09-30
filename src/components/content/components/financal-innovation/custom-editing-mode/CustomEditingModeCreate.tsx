import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CustomEditingModeCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-innovation/CustomEditingMode"
        title="Finansal İnnovasiya - Xüsusi Redaktə Modu"
        contentType="application/json"
        endpoint="CustomEditingMode"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="CustomEditingMode_loading"
      />
    </Box>
  );
};

export default CustomEditingModeCreate;
