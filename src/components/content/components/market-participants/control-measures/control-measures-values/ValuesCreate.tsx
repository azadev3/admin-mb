import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import { Months } from '../../../inflation/InflationValuesCreate';

const ValuesCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/market-participants/control-measure/values"
        title="Bazar İştirakçıları - Tətbiq Edilmiş Nəzarət Tədbirləri - Məlumatlar"
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
        endpoint="controlmeasure"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Ay Seçin',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
          {
            label: 'Kateqoriya Seçin',
            name: 'controlmeasurecategoryid',
            type: 'select',
            optionsEndpoint: 'controlmeasurecategory',
            multilang: false,
          },
        ]}
        loadingKey="controlmeasure_loading"
      />
    </Box>
  );
};

export default ValuesCreate;
