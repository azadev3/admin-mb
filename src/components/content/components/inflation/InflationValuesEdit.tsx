import { Box } from '@chakra-ui/react';
import { MonthsForInflation } from './InflationValuesCreate';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../helpers/form/FormField';
import { useParams } from 'react-router-dom';

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
        endpoint="Inflation"
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
            options: MonthsForInflation ?? [],
          },
        ]}
        loadingKey="Inflation_loading"
      />
    </Box>
  );
};

export default InflationValuesEdit;
