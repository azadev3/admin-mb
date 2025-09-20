import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const PosterEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/pul-siyaseti/poster"
        title="Pul Siyasəti - Posterlər"
      />
      <FormField
        type="edit"
        id={Number(id)}
        endpoint="poster"
        contentType="multipart/form-data"
        fields={[
          {
            label: 'File',
            name: 'file',
            type: 'file',
            multilang: false,
          },
        ]}
        loadingKey="poster_loading"
      />
    </Box>
  );
};

export default PosterEdit;
