import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const SecurityTypeEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/meas/security-type"
        title="MEAS - Qiymətli Kağız Növü"
        endpoint="securitytype"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="securitytype_loading"
      />
    </Box>
  );
};

export default SecurityTypeEdit;
