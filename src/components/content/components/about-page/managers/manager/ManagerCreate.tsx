import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const ManagerCreate: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/haqqimizda/manager" title="Menecerlər" />
      <LanguageTabs
        languages={languages}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="manager"
        languages={languages}
        activeLang={activeLang}
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

export default ManagerCreate;
