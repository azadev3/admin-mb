import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../shared/form/FormField';

export const Months = [
  { label: 'Yanvar', value: 1 },
  { label: 'Fevral', value: 2 },
  { label: 'Mart', value: 3 },
  { label: 'Aprel', value: 4 },
  { label: 'May', value: 5 },
  { label: 'İyun', value: 6 },
  { label: 'İyul', value: 7 },
  { label: 'Avqust', value: 8 },
  { label: 'Sentyabr', value: 9 },
  { label: 'Oktyabr', value: 10 },
  { label: 'Noyabr', value: 11 },
  { label: 'Dekabr', value: 12 },
];

const InflationValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/inflasiya" title="İnflasiya" />
      <FormField
        type="create"
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

export default InflationValuesCreate;
