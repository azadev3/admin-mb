import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MicrofinanceModelEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/MicrofinanceModel"
        title="Nəşrlər və Tədqiqatlar - Mikromaliyyə Modeli"
        endpoint="MicrofinanceModel"
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
        ]}
        loadingKey="MicrofinanceModel_loading"
      />
    </Box>
  );
};

export default MicrofinanceModelEdit;
