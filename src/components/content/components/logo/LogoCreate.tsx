import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';
const LogoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/logo"
        title="Sayta Loqo Əlavə Et"
        contentType="multipart/form-data"
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

export default LogoCreate;
