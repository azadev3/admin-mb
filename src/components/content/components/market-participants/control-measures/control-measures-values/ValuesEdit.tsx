import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Months } from '../../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ValuesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="controlmeasure"
        backRoute="/market-participants/control-measure/values"
        title="Bazar İştirakçıları - Tətbiq Edilmiş Nəzarət Tədbirləri - Məlumatlar"
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

export default ValuesEdit;
