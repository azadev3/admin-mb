import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MeasInformationTypeCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/meas/information-type"
        title="MEAS - Məlumat Növü"
        endpoint="informationtype"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="informationtype_loading"
      />
    </Box>
  );
};

export default MeasInformationTypeCreate;
