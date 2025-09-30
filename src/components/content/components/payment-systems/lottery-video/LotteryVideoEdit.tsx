import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const LotteryVideoEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/LotteryVideo"
        title="Ödəniş Sistemləri - Lotereya və Kampaniyalar - Videolar"
        contentType="application/json"
        endpoint="LotteryVideo"
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

export default LotteryVideoEdit;
