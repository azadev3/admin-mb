import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';

const MissionCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/missiya-ve-deyerler-values"
        title="Haqqımızda - Missiya və Dəyərlər"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="mission"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'Title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'Text', type: 'text', multilang: true },
          {
            label: 'İkon',
            name: 'File',
            type: 'file',
            accept: 'image/*',
            multilang: false,
          },
        ]}
        loadingKey="Mission_loading"
      />
    </Box>
  );
};

export default MissionCreate;
