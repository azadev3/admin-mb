import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ParticipantEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/Participant"
        title="Ödəniş Sistemləri - İştirakçı"
        contentType="application/json"
        endpoint="Participant"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
          {
            label: 'İştirakçı Kateqoriyası (seçin)',
            name: 'participantCategoryId',
            type: 'select',
            optionsEndpoint: 'ParticipantCategory',
            multilang: false,
          },
        ]}
        loadingKey="Participant_loading"
      />
    </Box>
  );
};

export default ParticipantEdit;
