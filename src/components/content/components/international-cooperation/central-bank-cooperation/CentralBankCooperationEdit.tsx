import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';
import { Months } from '../../inflation/InflationValuesCreate';

const CentralBankCooperationEdit: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/international-cooperation/CentralBankCooperation"
        title="Beynəlxalq Əməkdaşlıq - Əməkdaşlıq"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        endpoint="CentralBankCooperation"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Ay (seçin)',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
          {
            label: 'İl',
            name: 'year',
            type: 'number',
            multilang: false,
          },
        ]}
        loadingKey="CentralBankCooperation_loading"
      />
    </Box>
  );
};

export default CentralBankCooperationEdit;
