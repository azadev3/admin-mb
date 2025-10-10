import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CategoryCreate: React.FC = () => {
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

export default CategoryCreate;
