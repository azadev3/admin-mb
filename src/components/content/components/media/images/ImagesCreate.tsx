import { Box } from '@chakra-ui/react';
import FormField from '../../../../../helpers/form/FormField';
import { MainSeoSchema } from '../../../../../helpers/MainSchemaConfig';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const ImagesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/sekiller" title="Media - Şəkillər bölməsi" />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="Gallery"
        fields={[
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'Slug (AZ)', name: 'SlugAz', type: 'text' },
          { label: 'Slug (EN)', name: 'SlugEn', type: 'text' },
          { label: 'Mətn (AZ)', name: 'DescriptionAz', type: 'text' },
          { label: 'Mətn (EN)', name: 'DescriptionEn', type: 'text' },
          { label: 'Tarix', name: 'Date', type: 'date' },
          { label: 'Şəkil', name: 'ImageFile', type: 'file' },
          ...MainSeoSchema,
        ]}
        loadingKey="gallery_loading"
      />
    </Box>
  );
};

export default ImagesCreate;
