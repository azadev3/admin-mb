import { Box } from '@chakra-ui/react';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const InternationalEventCreate: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/international-cooperation/InternationalEvent"
        title="Beynəlxalq Əməkdaşlıq - Tədbirlər"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="InternationalEvent"
        activeLang={activeLang}
        contentType="application/json"
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayllar (seçin)',
            name: 'imageFile',
            type: 'multi-file',
            multilang: true,
          },
        ]}
        loadingKey="InternationalEvent_loading"
      />
    </Box>
  );
};

export default InternationalEventCreate;
