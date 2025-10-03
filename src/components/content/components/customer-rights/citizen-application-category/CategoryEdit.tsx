import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/citizencategory"
        title="Müştəri Hüquqları - Vətəndaş Müraciəti Kateqoriyası"
        endpoint="citizenapplicationcategory"
        contentType="application/json"
        fields={[
          { label: 'Kateqoriyanın Adı', name: 'title', type: 'text', multilang: true },
        ]}
        loadingKey="citizenapplicationcategory_loading"
      />
    </Box>
  );
};

export default CategoryEdit;
