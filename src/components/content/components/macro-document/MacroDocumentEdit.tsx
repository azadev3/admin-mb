import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const MacroDocumentEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/makroiqtisadi-senedler-ve-hesabatlar"
        title="Makroiqtisadi Sənədlər və Hesabatlar bölməsi"
        contentType="multipart/form-data"
        endpoint="macrodocument"
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

export default MacroDocumentEdit;
