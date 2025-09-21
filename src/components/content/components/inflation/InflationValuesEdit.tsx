import { Box } from '@chakra-ui/react';
import { Months } from './InflationValuesCreate';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';

const InflationValuesEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Box>Məlumat tapılmadı</Box>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/inflasiya"
        title="İnflasiya - Məlumatları dəyişdir"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="inflation"
        id={Number(id)}
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
