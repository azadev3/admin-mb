import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StaffArticleCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/StaffArticle"
        title="Nəşrlər və Tədqiqatlar - İşçilər Məqaləsi"
        endpoint="StaffArticle"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Sloqan (Alt başlıq)',
            name: 'subTitle',
            type: 'text',
            multilang: true,
          },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
        ]}
        loadingKey="StaffArticle_loading"
      />
    </Box>
  );
};

export default StaffArticleCreate;
