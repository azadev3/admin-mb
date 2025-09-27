import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const FinancialLiteracyCaptionCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-literacy/FinancialLiteracyCaption"
        title="Maliyyə Savadlılığı - Başlıqlar"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        activeLang={activeLang}
        languages={languages}
        contentType="application/json"
        endpoint="FinancialLiteracyCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Iframe URL',
            name: 'url',
            type: 'rich-text',
            multilang: false,
            placeholder: "<iframe src='example' />",
          },
        ]}
        loadingKey="FinancialLiteracyCaption_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyCaptionCreate;
