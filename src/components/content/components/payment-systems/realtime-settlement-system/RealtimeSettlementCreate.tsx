import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const RealtimeSettlementCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/payment-systems/RealTimeSettlementSystem"
        title="Ödəniş Sistemləri - Real Vaxt Rejimində Hesablaşmalar Sistemi (AZIPS)"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        activeLang={activeLang}
        languages={languages}
        type="create"
        contentType="application/json"
        endpoint="RealTimeSettlementSystem"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="RealTimeSettlementSystem_loading"
      />
    </Box>
  );
};

export default RealtimeSettlementCreate;
