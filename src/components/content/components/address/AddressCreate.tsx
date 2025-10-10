import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const AddressCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/address"
        title="Address bölməsi"
        endpoint="address"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Mətn', name: 'text', type: 'text', multilang: true },
          { label: 'Xəritə', name: 'map', type: 'text', multilang: false },
          { label: 'Əsas Ünvan?', name: 'isMain', type: 'boolean', multilang: false },
        ]}
        loadingKey="address_loading"
      />
    </Box>
  );
};

export default AddressCreate;
