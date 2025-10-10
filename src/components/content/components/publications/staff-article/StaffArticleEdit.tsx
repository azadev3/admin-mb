import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StaffArticleEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
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

export default StaffArticleEdit;
