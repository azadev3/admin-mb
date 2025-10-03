import { Box } from '@chakra-ui/react';
import { Months } from '../../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/control-measure/values"
        title="Bazar İştirakçıları - Tətbiq Edilmiş Nəzarət Tədbirləri - Məlumatlar"
        endpoint="controlmeasure"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Ay Seçin',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
          {
            label: 'Kateqoriya Seçin',
            name: 'controlmeasurecategoryid',
            type: 'select',
            optionsEndpoint: 'controlmeasurecategory',
            multilang: false,
          },
        ]}
        loadingKey="controlmeasure_loading"
      />
    </Box>
  );
};

export default ValuesCreate;
