import { Box } from '@chakra-ui/react';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { Months } from '../../inflation/InflationValuesCreate';

const MembershipInternationalOrganizationCreate: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/international-cooperation/MembershipInternationalOrganization"
        title="Beynəlxalq Əməkdaşlıq - Beynəlxalq Təşkilata Üzvlük"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="MembershipInternationalOrganization"
        activeLang={activeLang}
        contentType="application/json"
        languages={languages}
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
        loadingKey="MembershipInternationalOrganization_loading"
      />
    </Box>
  );
};

export default MembershipInternationalOrganizationCreate;
