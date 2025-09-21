import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const VacationsDetailEdit: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/carier/vacations/vacation/detail"
        title="Karyera - Vakansiya - Vakansiya Daxili"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        endpoint="vacancydetail"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Vakansiya (seçin)',
            name: 'vacancyId',
            type: 'select',
            optionsEndpoint: 'vacancy',
            multilang: false,
          },
        ]}
        loadingKey="vacancydetail_loading"
      />
    </Box>
  );
};

export default VacationsDetailEdit;
