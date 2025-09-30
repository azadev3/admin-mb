import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

export const TypesForDirector = [
  { label: 'Sədr', value: 1 },
  { label: 'Sədr Müavini', value: 2 },
  { label: 'Rəhbərlik', value: 3 },
];

const DirectorCreate: React.FC = () => {
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

export default DirectorCreate;
