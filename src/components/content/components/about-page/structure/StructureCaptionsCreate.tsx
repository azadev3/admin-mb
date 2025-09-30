import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StructureCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/teskilati-struktur"
        title="Haqqımızda - Təşkilati Struktur"
        endpoint="structurecaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="StructureCaption_loading"
      />
    </Box>
  );
};

export default StructureCaptionsCreate;
