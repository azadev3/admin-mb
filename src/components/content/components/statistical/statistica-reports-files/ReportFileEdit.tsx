import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ReportTitlesCreate: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/report-file"
        title="Hesabatların Yayımlanması Grafiki - Fayllar"
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

export default ReportTitlesCreate;
