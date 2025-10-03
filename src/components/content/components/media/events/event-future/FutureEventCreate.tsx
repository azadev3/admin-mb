import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const FutureEventCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/futureevent"
        title="Gələcək Tədbirlər"
        contentType="application/json"
        endpoint="futureevent"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Ünvan', name: 'location', type: 'text', multilang: true },
          { label: 'Format', name: 'format', type: 'text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="future_events_loading"
      />
    </Box>
  );
};

export default FutureEventCreate;
