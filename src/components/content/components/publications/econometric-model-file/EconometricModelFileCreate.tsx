import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const EconometricModelFileCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/EconometricModelFile"
        title="Finansal İnnovasiya - Ekonometrik Model - Fayl"
        endpoint="EconometricModelFile"
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
        loadingKey="EconometricModelFile_loading"
      />
    </Box>
  );
};

export default EconometricModelFileCreate;
