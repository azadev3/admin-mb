import { Box } from '@chakra-ui/react';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const StaffArticleFileCreate: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/publications/StaffArticleFile"
        title="Nəşrlər və Tədqiqatlar - İşçilər Məqaləsi - Fayl"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="StaffArticleFile"
        activeLang={activeLang}
        contentType="multipart/form-data"
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.docx,.doc,.word,.pdf',
          },
          {
            label: 'İşçilər Məqaləsi (seçin)',
            name: 'StaffArticleId',
            type: 'select',
            optionsEndpoint: 'StaffArticle',
            multilang: false,
          },
        ]}
        loadingKey="StaffArticleFile_loading"
      />
    </Box>
  );
};

export default StaffArticleFileCreate;
