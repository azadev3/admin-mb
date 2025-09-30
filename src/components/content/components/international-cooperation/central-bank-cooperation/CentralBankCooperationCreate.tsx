import { Box } from '@chakra-ui/react';
import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CentralBankCooperationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/CentralBankCooperation"
        title="Beynəlxalq Əməkdaşlıq - Əməkdaşlıq"
        endpoint="CentralBankCooperation"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Ay (seçin)',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
          {
            label: 'İl',
            name: 'year',
            type: 'number',
            multilang: false,
          },
        ]}
        loadingKey="CentralBankCooperation_loading"
      />
    </Box>
  );
};

export default CentralBankCooperationCreate;
