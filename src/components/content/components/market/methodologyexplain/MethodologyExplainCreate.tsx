import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MethodologyExplainCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/methodologyexplain"
        title="Metodologiya İzahı"
        contentType="application/json"
        endpoint="methodologyexplain"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="methodologyexplain_loading"
      />
    </Box>
  );
};

export default MethodologyExplainCreate;
