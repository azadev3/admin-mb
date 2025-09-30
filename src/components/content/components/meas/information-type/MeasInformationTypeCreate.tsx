import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const MeasInformationTypeCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/meas/information-type"
        title="MEAS - Məlumat Növü"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="informationtype"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="informationtype_loading"
      />
    </Box>
  );
};

export default MeasInformationTypeCreate;
