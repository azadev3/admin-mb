import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const PhonesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="phone"
        backRoute="/telefonlar"
        title="Footar Telefonlar bölməsi"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Telefon Nömrəsi',
            name: 'contactNumber',
            type: 'text',
            multilang: false,
          },
        ]}
        loadingKey="phones_loading"
      />
    </Box>
  );
};

export default PhonesCreate;
