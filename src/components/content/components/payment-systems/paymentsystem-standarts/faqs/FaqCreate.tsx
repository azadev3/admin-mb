import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const FaqCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/payment-systems/standarts/faq"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Üzrə Standartlar - FAQ"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="PaymentSystemStandartFAQ"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true }, 
          {
            label: 'Ödəniş Sistemi Standartı (Seçin)',
            name: 'paymentSystemStandartId',
            type: 'select',
            optionsEndpoint: 'PaymentSystemStandart',
            multilang: false,
          },
        ]}
        loadingKey="PaymentSystemStandartFAQ_loading"
      />
    </Box>
  );
};

export default FaqCreate;
