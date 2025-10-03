import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const VideoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/video"
        title="Pul Siyasəti - Videoçarx"
        endpoint="monetarypolicyvideo"
        contentType="application/json"
        fields={[
          {
            label: 'Video URL',
            placeholder: 'Məsələn: https://www.youtube.com/videolink',
            name: 'url',
            type: 'text',
            multilang: false,
          },
        ]}
        loadingKey="monetarypolicyvideo_loading"
      />
    </Box>
  );
};

export default VideoCreate;
