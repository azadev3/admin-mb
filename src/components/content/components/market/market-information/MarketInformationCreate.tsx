import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MarketInformationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-information"
        title="Bazar Məlumatı"
        endpoint="market/import-market-information"
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
        loadingKey="marketinformation_loading"
      />
    </Box>
  );
};

export default MarketInformationCreate;
