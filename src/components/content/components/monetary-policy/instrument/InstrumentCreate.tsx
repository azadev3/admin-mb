import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InstrumentCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/MonetaryPolicyInstrument"
        title="Pul Siyasəti - Pul Siyasəti Alətləri və Pul Bazarı"
        endpoint="MonetaryPolicyInstrument"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.doc,.xlsx',
          },
        ]}
        loadingKey="MonetaryPolicyInstrument_loading"
      />
    </Box>
  );
};

export default InstrumentCreate;
