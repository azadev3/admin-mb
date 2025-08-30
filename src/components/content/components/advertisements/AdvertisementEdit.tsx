import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';
import { MainSeoSchemaOnlyMeta } from '../../../../shared/MainSchemaConfig';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const AdvertisementEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/elanlar" title="Ana Səhifə - Elanlar bölməsi" />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="Advertisement"
        id={Number(id)}
        fields={[
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'Slug (AZ)', name: 'SlugAz', type: 'text' },
          { label: 'Slug (EN)', name: 'SlugEn', type: 'text' },
          { label: 'Açıqlama (AZ)', name: 'DescriptionAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'DescriptionEn', type: 'text' },
          { label: 'Tarix', name: 'Date', type: 'date' },
          ...MainSeoSchemaOnlyMeta,
        ]}
        loadingKey="advertisements_loading"
      />
    </Box>
  );
};

export default AdvertisementEdit;
