import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const EventsEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/eventcontent"
        title="Tədbirlər - Daxili Açıqlama bölməsi"
        contentType="multipart/form-data"
        endpoint="eventcontent"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
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
            label: 'Bu bölmə hansı tədbirin daxili açıqlamasıdır? (seçin)',
          },
        ]}
        loadingKey="events_content_loading"
      />
    </Box>
  );
};

export default EventsEdit;
