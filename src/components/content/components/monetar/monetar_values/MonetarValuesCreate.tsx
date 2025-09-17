import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const MonetarValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/monetar-gostericiler-values"
        title="Monetar Göstəricilər - Dəyərlər"
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="monetaryindicator"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Pul bazası',
            name: 'monetaryindicatorcategoryid',
            type: 'select',
            optionsEndpoint: 'monetaryindicatorcategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="MonetaryIndicator_loading"
      />
    </Box>
  );
};

export default MonetarValuesCreate;
