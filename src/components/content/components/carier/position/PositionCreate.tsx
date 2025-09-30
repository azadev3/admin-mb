import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PositionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/carier/position"
        title="Karyera - Mövqe"
        endpoint="position"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Branch (Filial) - seçin',
            name: 'branchId',
            type: 'select',
            optionsEndpoint: 'branch',
            multilang: false,
          },
        ]}
        loadingKey="position_loading"
      />
    </Box>
  );
};

export default PositionCreate;
