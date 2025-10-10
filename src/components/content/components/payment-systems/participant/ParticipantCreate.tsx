import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ParticipantCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/Participant"
        title="Ödəniş Sistemləri - İştirakçı"
        endpoint="Participant"
        contentType="multipart/form-data"
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

export default ParticipantCreate;
