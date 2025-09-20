import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const VideoEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/pul-siyaseti/video"
        title="Pul Siyasəti - Videoçarx"
      />
      <FormField
        type="edit"
        id={Number(id)}
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

export default VideoEdit;
