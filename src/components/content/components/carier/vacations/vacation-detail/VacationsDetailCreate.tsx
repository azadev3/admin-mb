import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const VacationsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/carier/vacations/vacation/detail"
        title="Karyera - Vakansiya - Vakansiya Daxili"
        endpoint="vacancydetail"
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

export default VacationsCreate;
