import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const AnalysisFileCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/analysis-files"
        title="Pul Siyasəti - Proqnozlaşdırma və Siyasət Təhlili Sistemi - Fayllar"
        endpoint="PolicyAnalysisFile"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.doc,.xlsx',
          },
        ]}
        loadingKey="PolicyAnalysisFile_loading"
      />
    </Box>
  );
};

export default AnalysisFileCreate;
