import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const LotteryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="Lottery"
        title="Ödəniş Sistemləri - Lotereya və Kampaniyalar"
        backRoute="/payment-systems/Lottery"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="Lottery_loading"
      />
    </Box>
  );
};

export default LotteryCreate;
