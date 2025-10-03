import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StaffArticleFileEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/StaffArticleFile"
        title="Nəşrlər və Tədqiqatlar - İşçilər Məqaləsi - Fayl"
        endpoint="StaffArticleFile"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.docx,.doc,.word,.pdf',
          },
          {
            label: 'İşçilər Məqaləsi (seçin)',
            name: 'StaffArticleId',
            type: 'select',
            optionsEndpoint: 'StaffArticle',
            multilang: false,
          },
        ]}
        loadingKey="StaffArticleFile_loading"
      />
    </Box>
  );
};

export default StaffArticleFileEdit;
