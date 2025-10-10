import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const RoadmapOverviewCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/RoadmapOverview"
        title="Nəşrlər və Tədqiqatlar - Yol Xəritəsinə Baxış"
        endpoint="RoadmapOverview"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.doc,.docx,.pdf',
          },
        ]}
        loadingKey="RoadmapOverview_loading"
      />
    </Box>
  );
};

export default RoadmapOverviewCreate;
