import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const FinancialLiteracyEventCaptionCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-literacy/FinancialLiteracyEventCaption"
        title="Maliyyə Savadlılığı - Tədbir Başlığı"
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
        contentType="multipart/form-data"
        endpoint="FinancialLiteracyEventCaption"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="FinancialLiteracyEventCaption_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyEventCaptionCreate;
