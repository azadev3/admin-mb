import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ParticipantCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/ParticipantCategory"
        title="Ödəniş Sistemləri - Proqram Təminatı"
        contentType="application/json"
        endpoint="ParticipantCategory"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="ParticipantCategory_loading"
      />
    </Box>
  );
};

export default ParticipantCategoryEdit;
