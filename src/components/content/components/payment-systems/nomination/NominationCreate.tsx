import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const NominationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/Nomination"
        title="Ödəniş Sistemləri - Nominasiyalar"
        endpoint="Nomination"
        contentType="application/json"
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
            label: 'Nominasiya Kateqoriyası (seçin)',
            name: 'nominationCategoryId',
            type: 'select',
            optionsEndpoint: 'NominationCategory',
            multilang: false,
          },
        ]}
        loadingKey="Nomination_loading"
      />
    </Box>
  );
};

export default NominationCreate;
