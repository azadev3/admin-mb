import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const VideoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/pul-siyaseti/video"
        title="Pul Siyasəti - Videoçarx"
      />
      <FormField
        type="create"
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
