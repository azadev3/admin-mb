import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ReportFileCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/report-file"
        title="Statistik Hesabatların Yayımlanması Grafiki - Fayllar"
        contentType="multipart/form-data"
        endpoint="statisticalreportfile"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'File', type: 'file', multilang: false, accept: '.pdf' },
        ]}
        loadingKey="statisticalreportfile_loading"
      />
    </Box>
  );
};

export default ReportFileCreate;
