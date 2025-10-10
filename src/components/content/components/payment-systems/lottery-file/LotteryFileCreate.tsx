import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const LotteryFileCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/LotteryFile"
        title="Ödəniş Sistemləri - Lotereya və Kampaniyalar - Fayllar"
        endpoint="LotteryFile"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
          {
            label: 'Lotereya (seçin)',
            name: 'lotteryId',
            type: 'select',
            optionsEndpoint: 'Lottery',
            multilang: false,
          },
        ]}
        loadingKey="LotteryFile_loading"
      />
    </Box>
  );
};

export default LotteryFileCreate;
