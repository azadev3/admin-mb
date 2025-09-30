import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PercentCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        contentType="application/json"
        backRoute="/faiz-dehlizi-captions"
        title="Faiz Dəhlizi - Başlıqlar"
        endpoint="percentcorridorcategory"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Slug', name: 'slug', type: 'text', multilang: true },
          { label: 'Not', name: 'note', type: 'text', multilang: true },
        ]}
        loadingKey="percentcorridor-captions_loading"
      />
    </Box>
  );
};

export default PercentCategoryEdit;
