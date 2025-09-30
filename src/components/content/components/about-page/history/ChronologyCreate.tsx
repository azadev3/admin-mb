import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ChronologyCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        contentType="application/json"
        backRoute="/haqqimizda/tarix-xronologiya"
        title="Haqqımızda - Tarix / Xronologiya"
        endpoint="chronology"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'İl',
            placeholder: 'İl seçin',
            name: 'year',
            type: 'number',
            multilang: false,
          },
        ]}
        loadingKey="Chronology_loading"
      />
    </Box>
  );
};

export default ChronologyCreate;
