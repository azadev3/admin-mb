import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StatisticaCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/statistika-captions"
        title="Statistika - Başlıqlar"
        contentType="application/json"
        endpoint="statisticcaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="statistica-captions_loading"
      />
    </Box>
  );
};

export default StatisticaCaptionsCreate;
