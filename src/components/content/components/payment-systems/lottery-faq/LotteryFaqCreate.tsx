import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const LotteryFaqCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/LotteryFAQ"
        title="Ödəniş Sistemləri - Lotereya və Kampaniyalar - Tez-tez Verilən Suallar"
        endpoint="LotteryFAQ"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'text', multilang: true },
          {
            label: 'Lotereya (seçin)',
            name: 'lotteryId',
            type: 'select',
            optionsEndpoint: 'Lottery',
            multilang: false,
          },
        ]}
        loadingKey="LotteryFAQ_loading"
      />
    </Box>
  );
};

export default LotteryFaqCreate;
