import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';

const ManagerEdit: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/haqqimizda/manager" title="Menecerlər" />
      <LanguageTabs
        languages={languages}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="edit"
        contentType="multipart/form-data"
        endpoint="manager"
        id={Number(id)}
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

export default ManagerEdit;
