import { Box } from '@chakra-ui/react';
// import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MembershipInternationalOrganizationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/MembershipInternationalOrganization"
        title="Beynəlxalq Əməkdaşlıq - Beynəlxalq Təşkilata Üzvlük"
        endpoint="MembershipInternationalOrganization"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          // {
          //   label: 'Ay (seçin)',
          //   name: 'month',
          //   type: 'select',
          //   multilang: false,
          //   options: Months,
          // },
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
