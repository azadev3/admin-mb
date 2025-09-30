import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InternationalCooperationInitiativeCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/InternationalCooperationInitiative"
        title="Beynəlxalq Əməkdaşlıq - Əməkdaşlıq Təşəbbüsü"
        endpoint="InternationalCooperationInitiative"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.pdf,.doc,.docx',
          },
        ]}
        loadingKey="FinancialEvent_loading"
      />
    </Box>
  );
};

export default InternationalCooperationInitiativeCreate;
