import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const YieldDurationsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/gelirlilik-muddetleri"
        title="Gəlirlilik Müddətləri"
        endpoint="yield/import-durations"
        contentType="multipart/form-data"
        fields={[
          { label: 'Tarix', name: 'date', type: 'date', multilang: false },
          {
            label: 'FAYL',
            name: 'file',
            type: 'file',
            accept: '.xlsx,.xls,.doc,.docx,.pdf,.word',
            multilang: false,
          },
        ]}
        loadingKey="importdurations_loading"
      />
    </Box>
  );
};

export default YieldDurationsCreate;
