import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const EventImagesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/eventimage"
        title="Tədbirlər - Başlıq və Açıqlama bölməsi"
        contentType="multipart/form-data"
        endpoint="eventimage"
        fields={[
          {
            label: 'Şəkillər',
            name: 'ImageFiles',
            type: 'multi-file',
            multilang: false,
            accept: 'image/*',
          },
          {
            name: 'EventId',
            optionsEndpoint: 'event',
            type: 'select',
            label: 'Bu şəkillər hansı tədbirin daxilində olsun? (seçin)',
            multilang: false,
          },
        ]}
        loadingKey="eventimage_loading"
      />
    </Box>
  );
};

export default EventImagesEdit;
