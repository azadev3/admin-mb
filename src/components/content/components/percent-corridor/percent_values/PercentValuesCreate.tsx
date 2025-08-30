import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const PercentValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/faiz-dehlizi-values"
        title="Faiz Dəhlizi - Dəyərlər"
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="PercentCorridor"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Aşağı Faiz Həddi',
            name: 'percentCategoryId',
            type: 'select',
            optionsEndpoint: 'PercentCategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="PercentCorridor_loading"
      />
    </Box>
  );
};

export default PercentValuesCreate;
