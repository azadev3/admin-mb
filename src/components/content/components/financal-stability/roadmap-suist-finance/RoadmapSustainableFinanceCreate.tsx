import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const RoadmapSustainableFinanceCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/RoadmapSustainableFinance"
        title="Maliyyə Sabitliyi - Dayanıqlı Maliyyə Üzrə Yol Xəritəsi"
        contentType="application/json"
        endpoint="RoadmapSustainableFinance"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="RoadmapSustainableFinance_loading"
      />
    </Box>
  );
};

export default RoadmapSustainableFinanceCreate;
