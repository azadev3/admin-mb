import { Box } from '@chakra-ui/react';
import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InfographicCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/infographic"
        title="Müştəri Hüquqları - İnfoqrafika"
        endpoint="infographic"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx,.xlsx',
          },
          {
            label: 'Ay (seçin)',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
        ]}
        loadingKey="infographic_loading"
      />
    </Box>
  );
};

export default InfographicCreate;
