import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
const LogoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/logo" title="Sayta Loqo Əlavə Et" />
      <FormField
        type="create"
        endpoint="Logo"
        fields={[
          { label: 'Header Loqosu', name: 'HeaderFile', type: 'file' },
          { label: 'Footer Loqosu', name: 'FooterFile', type: 'file' },
          { label: 'Favicon', name: 'FaviconFile', type: 'file' },
        ]}
        loadingKey="logo_loading"
      />
    </Box>
  );
};

export default LogoCreate;
