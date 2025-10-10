import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const LogoEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Box>Məlumat tapılmadı</Box>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        contentType="multipart/form-data"
        backRoute="/logo"
        title="Məlumatları dəyişdir"
        endpoint="logo"
        fields={[
          { label: 'Header Loqosu', name: 'HeaderLogo', type: 'file' },
          { label: 'Footer Loqosu', name: 'FooterLogo', type: 'file' },
          { label: 'Favicon', name: 'Favicon', type: 'file' },
        ]}
        loadingKey="logo_loading"
      />
    </Box>
  );
};

export default LogoEdit;
