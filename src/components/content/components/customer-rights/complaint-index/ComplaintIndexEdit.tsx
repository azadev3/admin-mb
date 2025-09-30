import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ComplaintIndexEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/complaint-index/complaintindex"
        title="Müştəri Hüquqları - Şikayət İndeksləri"
        endpoint="complaintindex"
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
          {
            label: 'Şikayət İndeksi Kateqoriyası (seçin)',
            name: 'complaintIndexCategoryId',
            type: 'select',
            multilang: false,
            optionsEndpoint: 'complaintindexcategory',
          },
        ]}
        loadingKey="complaintindex_loading"
      />
    </Box>
  );
};

export default ComplaintIndexEdit;
