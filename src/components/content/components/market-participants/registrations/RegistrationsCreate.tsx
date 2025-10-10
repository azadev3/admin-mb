import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const RegistrationsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/register/descriptions"
        title="Bazar İştirakçıları - Qiymətli Kağızların Dövlət Qeydiyyatı İlə Bağlı Təlimat - Açıqlamalar"
        endpoint="registrationsecurity"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="registrationsecurity_loading"
      />
    </Box>
  );
};

export default RegistrationsCreate;
