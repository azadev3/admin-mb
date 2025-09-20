import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import { MonthsForInflation } from '../../../inflation/InflationValuesCreate';

const ValuesEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
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
        type="edit"
        id={Number(id)}
        endpoint="controlmeasure"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Ay Seçin',
            name: 'month',
            type: 'select',
            multilang: false,
            options: MonthsForInflation,
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

export default ValuesEdit;
