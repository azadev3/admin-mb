import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const LogoEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Box>Məlumat tapılmadı</Box>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/logo" title="Məlumatları dəyişdir" />
      <FormField
        type="edit"
        endpoint="logo"
        id={Number(id)}
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
