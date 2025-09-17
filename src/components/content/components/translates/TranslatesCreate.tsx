import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../shared/form/FormField';
import { useLanguages } from '../../../../hooks/useLanguages';
import LanguageTabs from '../../../../shared/form/LanguageTabs';

const TranslatesCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/tercumeler" title="Saytın Ümumi Tərcümələri" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="translate"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[
          {
            label: 'Key (açar söz)',
            placeholder: 'Məsələn: home_title',
            name: 'key',
            type: 'text',
            multilang: false,
          },
          {
            label: 'Dəyər',
            placeholder: 'Məsələn: Ana Səhifə',
            name: 'value',
            type: 'text',
            multilang: true,
          },
        ]}
        loadingKey="translates_loading"
      />
    </Box>
  );
};

export default TranslatesCreate;
