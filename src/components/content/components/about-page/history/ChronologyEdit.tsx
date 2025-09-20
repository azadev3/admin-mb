import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const ChronologyEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/tarix-xronologiya"
        title="Haqqımızda - Tarix / Xronologiya"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        contentType="application/json"
        id={Number(id)}
        endpoint="chronology"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'text', multilang: true },
          {
            label: 'İl',
            placeholder: 'İl seçin',
            name: 'year',
            type: 'number',
            multilang: false,
          },
        ]}
        loadingKey="Chronology_loading"
      />
    </Box>
  );
};

export default ChronologyEdit;
