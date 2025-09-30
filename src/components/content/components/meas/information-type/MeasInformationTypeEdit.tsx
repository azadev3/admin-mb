import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MeasInformationTypeEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
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

export default MeasInformationTypeEdit;
