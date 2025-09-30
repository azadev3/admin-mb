import { Box } from '@chakra-ui/react';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const MarketDegreeCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/market-degree" title="Bazar Faiz Dərəcəsi" />
      <FormField
        type="create"
        endpoint="market/import-market-degree"
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
        loadingKey="marketdegree_loading"
      />
    </Box>
  );
};

export default MarketDegreeCreate;
