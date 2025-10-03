import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const LotteryVideoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/LotteryVideo"
        title="Ödəniş Sistemləri - Lotereya və Kampaniyalar - Videolar"
        endpoint="LotteryVideo"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'URL', name: 'url', type: 'text', multilang: false },
          {
            label: 'Lotereya (seçin)',
            name: 'lotteryId',
            type: 'select',
            optionsEndpoint: 'Lottery',
            multilang: false,
          },
        ]}
        loadingKey="LotteryVideo_loading"
      />
    </Box>
  );
};

export default LotteryVideoCreate;
