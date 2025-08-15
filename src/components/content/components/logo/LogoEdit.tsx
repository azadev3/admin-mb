import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useParams } from 'react-router-dom';

const LogoEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Box>Məlumat tapılmadı</Box>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/logo" title="Məlumatları dəyişdir" />
      <FormField
        type="edit"
        endpoint="Logo"
        id={Number(id)}
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

export default LogoEdit;
