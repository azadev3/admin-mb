import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const AnnualReportCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/AnnualReport"
        title="Nəşrlər və Tədqiqatlar - İllik Hesabat"
        endpoint="AnnualReport"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'İl',
            name: 'year',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.docx,.doc,.word,.pdf',
          },
        ]}
        loadingKey="AnnualReport_loading"
      />
    </Box>
  );
};

export default AnnualReportCreate;
