import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const InterCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/carier/intern/captions"
        title="Karyera - Təcrübə Proqramları - Başlıq Əlavə Et"
        endpoint="internshipcaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="internshipcaption_loading"
      />
    </Box>
  );
};

export default InterCaptionsCreate;
