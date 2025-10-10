import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const MacroDocumentCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/makroiqtisadi-senedler-ve-hesabatlar"
        title="Makroiqtisadi Sənədlər və Hesabatlar bölməsi"
        endpoint="macrodocument"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Mətn', name: 'text', type: 'text', multilang: true },
          { label: 'URL', name: 'url', type: 'text', multilang: false },
          { label: 'Icon', name: 'file', type: 'file', multilang: false },
        ]}
        loadingKey="mc_loading"
      />
    </Box>
  );
};

export default MacroDocumentCreate;
