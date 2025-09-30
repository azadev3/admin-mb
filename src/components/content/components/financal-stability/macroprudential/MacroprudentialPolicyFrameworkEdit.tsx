import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MacroprudentialPolicyFrameworkEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        contentType="multipart/form-data"
        backRoute="/financial-stability/MacroprudentialPolicyFramework"
        title="Maliyyə Sabitliyi - Makroprudensial Siyasət Çərçivəsi"
        endpoint="MacroprudentialPolicyFramework"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.pdf,.xlsx,.xls,.docx,.doc',
          },
        ]}
        loadingKey="MacroprudentialPolicyFramework_loading"
      />
    </Box>
  );
};

export default MacroprudentialPolicyFrameworkEdit;
