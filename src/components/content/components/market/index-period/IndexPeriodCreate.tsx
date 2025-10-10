import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const IndexPeriodCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/index-period"
        title="İndeks Periodu"
        endpoint="market/import-index-period"
        contentType="multipart/form-data"
        fields={[
          {
            label: 'FAYL',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls',
          },
        ]}
        loadingKey="indexperiod_loading"
      />
    </Box>
  );
};

export default IndexPeriodCreate;
