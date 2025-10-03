import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ReportTitlesCreate: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/report-titles"
        title="Statistika - Statistik Hesabatların Yayımlanması Grafiki - Başlıqlar"
        contentType="application/json"
        endpoint="statisticalreport"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="statisticalreport_loading"
      />
    </Box>
  );
};

export default ReportTitlesCreate;
