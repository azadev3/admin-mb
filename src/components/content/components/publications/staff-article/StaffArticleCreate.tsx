import { Box } from '@chakra-ui/react';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const StaffArticleCreate: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/publications/StaffArticle"
        title="Nəşrlər və Tədqiqatlar - İşçilər Məqaləsi"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="StaffArticle"
        activeLang={activeLang}
        contentType="application/json"
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Sloqan (Alt başlıq)',
            name: 'subTitle',
            type: 'text',
            multilang: true,
          },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
        ]}
        loadingKey="StaffArticle_loading"
      />
    </Box>
  );
};

export default StaffArticleCreate;
