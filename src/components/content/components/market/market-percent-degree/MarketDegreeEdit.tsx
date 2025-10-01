import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MarketDegreeEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-degree"
        title="Bazar Faiz Dərəcəsi"
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

export default MarketDegreeEdit;
