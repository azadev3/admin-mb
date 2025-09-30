import { Box } from '@chakra-ui/react';
import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ReviewCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/review"
        title="Pul Siyasəti - Pul Siyasətinin İcmalı"
        endpoint="monetarypolicyreview"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
          },
          {
            label: 'Ay Seçin',
            name: 'month',
            type: 'select',
            options: Months,
            multilang: false,
          },
        ]}
        loadingKey="monetarypolicyreview_loading"
      />
    </Box>
  );
};

export default ReviewCreate;
