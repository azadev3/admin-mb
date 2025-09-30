import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PercentCategoryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/faiz-dehlizi-captions"
        title="Faiz Dəhlizi - Başlıqlar"
        contentType="application/json"
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

export default PercentCategoryCreate;
