import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MonetarValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/monetar-gostericiler-values"
        title="Monetar Göstəricilər - Dəyərlər"
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
