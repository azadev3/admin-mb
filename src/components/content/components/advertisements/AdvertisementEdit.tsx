import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MainSeoSchemaOnlyMeta } from '../../../../shared/MainSchemaConfig';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const AdvertisementEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/elanlar"
        title="Ana Səhifə - Elanlar bölməsi"
        contentType="application/json"
        endpoint="advertisement"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Sloqan (Qısa Açıqlama)',
            name: 'shortDescription',
            type: 'text',
            multilang: true,
          },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date' },
          ...MainSeoSchemaOnlyMeta,
        ]}
        loadingKey="advertisements_loading"
      />
    </Box>
  );
};

export default AdvertisementEdit;
