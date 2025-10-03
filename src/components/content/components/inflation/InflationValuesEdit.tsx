import { Box } from '@chakra-ui/react';
import { Months } from './InflationValuesCreate';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const InflationValuesEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Box>Məlumat tapılmadı</Box>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/inflasiya"
        title="İnflasiya - Məlumatları dəyişdir"
        contentType="application/json"
        endpoint="inflation"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'İl',
            placeholder: 'İli yazın',
            name: 'year',
            type: 'number',
          },
          {
            label: 'Ay seçin',
            name: 'month',
            type: 'select',
            options: Months ?? [],
          },
        ]}
        loadingKey="Inflation_loading"
      />
    </Box>
  );
};

export default InflationValuesEdit;
