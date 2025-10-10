import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const RegistrationsCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/register/captions"
        title="Bazar İştirakçıları - Qiymətli Kağızların Dövlət Qeydiyyatı İlə Bağlı Təlimat - Başlıqlar"
        endpoint="registrationsecuritycaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="registrationsecuritycaption_loading"
      />
    </Box>
  );
};

export default RegistrationsCaptionsCreate;
