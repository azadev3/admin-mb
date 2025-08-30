import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';

const SocialEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/sosial" title="Sosial Linklər bölməsi" />
      <FormField
        type="edit"
        endpoint="Social"
        id={Number(id)}
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', placeholder: 'Məsələn: Facebook', name: 'Title', type: 'text' },
          { label: 'Icon', name: 'File', type: 'file' },
          { label: 'URL', name: 'Url', type: 'text' },
        ]}
        loadingKey="social_loading"
      />
    </Box>
  );
};

export default SocialEdit;
