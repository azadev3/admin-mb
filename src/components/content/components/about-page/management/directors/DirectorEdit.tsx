import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { TypesForDirector } from './DirectorCreate';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const DirectorEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/idareetme-direktorlar"
        title="Haqqımızda - Direktorlar"
        contentType="multipart/form-data"
        endpoint="director"
        fields={[
          {
            label: 'Başlıq',
            name: 'fullname',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Pozisiya',
            name: 'position',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
          {
            label: 'Rəhbər Növü',
            name: 'type',
            multilang: false,
            type: 'select',
            options: TypesForDirector,
          },
        ]}
        loadingKey="Director_loading"
      />
    </Box>
  );
};

export default DirectorEdit;
