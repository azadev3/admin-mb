import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/complaint-index/category"
        title="Müştəri Hüquqları - Şikayət İndeksi - Kateqoriya"
        endpoint="complaintindexcategory"
        contentType="application/json"
        fields={[
          { label: 'Kateqoriyanın Adı', name: 'title', type: 'text', multilang: true },
        ]}
        loadingKey="complaintindexcategory_loading"
      />
    </Box>
  );
};

export default CategoryEdit;
