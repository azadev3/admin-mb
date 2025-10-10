import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PercentValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/faiz-dehlizi-values"
        title="Faiz Dəhlizi - Dəyərlər"
        contentType="application/json"
        endpoint="percentcorridor"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Aşağı Faiz Həddi',
            name: 'percentcorridorcategoryid',
            type: 'select',
            optionsEndpoint: 'percentcorridorcategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="PercentCorridor_loading"
      />
    </Box>
  );
};

export default PercentValuesCreate;
