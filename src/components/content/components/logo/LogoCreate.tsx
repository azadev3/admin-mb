import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../shared/form/FormField';
const LogoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/logo" title="Sayta Loqo Əlavə Et" />
      <FormField
        type="create"
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
