import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const EventVideosCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/eventvideo"
        title="Tədbirlər - Videolar"
        contentType="application/json"
        endpoint="eventvideo"
        fields={[
          {
            name: 'url',
            type: 'text',
            label: 'Video URL Yerləşdirin',
            placeholder: 'Məsələn: https://www.youtube.com/videolink',
            multilang: false,
          },
          {
            name: 'EventId',
            optionsEndpoint: 'event',
            type: 'select',
            label: 'Bu şəkillər hansı tədbirin daxilində olsun? (seçin)',
            multilang: false,
          },
        ]}
        loadingKey="eventvideo_loading"
      />
    </Box>
  );
};

export default EventVideosCreate;
