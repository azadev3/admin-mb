import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CustomerEventsEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/customer-events"
        title="Müştəri Hüquqları - Müştəri Hadisələri"
        contentType="multipart/form-data"
        endpoint="customerevent"
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
        ]}
        loadingKey="customerevent_loading"
      />
    </Box>
  );
};

export default CustomerEventsEdit;
