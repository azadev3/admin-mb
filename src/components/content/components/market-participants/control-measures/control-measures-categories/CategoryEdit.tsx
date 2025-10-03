import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const CategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/control-measure/category"
        title="Bazar İştirakçıları - Tətbiq Edilmiş Nəzarət Tədbirləri - Kateqoriyalar"
        endpoint="controlmeasurecategory"
        contentType="application/json"
        fields={[
          { label: 'Kateqoriyanın Adı', name: 'title', type: 'text', multilang: true },
        ]}
        loadingKey="controlmeasurecategory_loading"
      />
    </Box>
  );
};

export default CategoryEdit;
