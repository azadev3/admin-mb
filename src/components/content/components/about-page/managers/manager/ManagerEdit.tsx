import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ManagerEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/manager"
        title="Menecerlər"
        contentType="multipart/form-data"
        endpoint="manager"
        fields={[
          {
            label: 'Tam Ad',
            name: 'fullName',
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
            type: 'file',
            multilang: false,
            name: 'file',
            accept: '.xlsx,.xls,.doc,.pdf,.docx',
          },
        ]}
        loadingKey="manager_loading"
      />
    </Box>
  );
};

export default ManagerEdit;
