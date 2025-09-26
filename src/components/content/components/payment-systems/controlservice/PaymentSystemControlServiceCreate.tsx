import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const PaymentSystemControlServiceCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/payment-systems/PaymentSystemControlService"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Nəzarət Xidməti"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="PaymentSystemControlService"
        contentType="multipart/form-data"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Ödəniş Sistemi Nəzarəti (seçin)',
            name: 'PaymentSystemControlId',
            optionsEndpoint: 'PaymentSystemControl',
            type: 'select',
            multilang: false,
          },
        ]}
        loadingKey="PaymentSystemControlService_loading"
      />
    </Box>
  );
};

export default PaymentSystemControlServiceCreate;
