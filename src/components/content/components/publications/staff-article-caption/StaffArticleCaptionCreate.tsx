import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StaffArticleCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/StaffArticleCaption"
        title="Nəşrlər və Tədqiqatlar - İşçilər Məqaləsi - Başlıq"
        contentType="application/json"
        endpoint="StaffArticleCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="StaffArticleCaption_loading"
      />
    </Box>
  );
};

export default StaffArticleCaptionCreate;
