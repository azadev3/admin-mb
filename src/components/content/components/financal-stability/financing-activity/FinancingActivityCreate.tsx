import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancingActivityCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/FinancingActivity"
        title="Maliyyə Sabitliyi - Maliyyələşdirmə Fəaliyyəti"
        endpoint="FinancingActivity"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.pdf,.xlsx,.xls,.docx,.doc',
          },
        ]}
        loadingKey="FinancingActivity_loading"
      />
    </Box>
  );
};

export default FinancingActivityCreate;
