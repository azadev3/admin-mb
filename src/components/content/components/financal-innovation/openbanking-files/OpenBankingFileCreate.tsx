import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const OpenBankingFileCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-innovation/OpenBankingFile"
        title="Finansal İnnovasiya - Açıq Bankçılıq - Fayllar"
        endpoint="OpenBankingFile"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.doc,.docx,.pdf',
          },
        ]}
        loadingKey="OpenBankingFile_loading"
      />
    </Box>
  );
};

export default OpenBankingFileCreate;
