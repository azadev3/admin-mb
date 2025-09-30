import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PositionEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="position"
        backRoute="/carier/position"
        title="Karyera - Mövqe"
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

export default PositionEdit;
