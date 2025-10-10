import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StatisticalBulletinCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="nakhchivanbulletin"
        backRoute="/nakhcivan/statistical-bulletin"
        title="Naxçıvan Muxtar Respublikası İdarəsi - Statistik Bülleteni"
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
            accept: '.pdf,.xlsx,.doc',
          },
        ]}
        loadingKey="nakhchivanbulletin_loading"
      />
    </Box>
  );
};

export default StatisticalBulletinCreate;
