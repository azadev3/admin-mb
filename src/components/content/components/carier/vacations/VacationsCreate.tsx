import { Box } from '@chakra-ui/react';
// import { VacationTypes } from '../../../../../shared/vacationTypes';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';
import { VacationTypes } from '../../../../../shared/vacationTypes';

const VacationsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/carier/vacations/vacation"
        title="Karyera - Vakansiya Əlavə Et"
        endpoint="vacancy"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'İş Yeri', name: 'location', type: 'text', multilang: true },
          // { label: 'Vakansiyanın Bitmə Tarixi', name: 'date', type: 'date', multilang: false },
          {
            label: 'Vakansiya Tipi (seçin)',
            name: 'type',
            type: 'select',
            options: VacationTypes,
            multilang: false,
          },
          {
            label: 'Vəzifə - seçin',
            name: 'positionId',
            type: 'select',
            optionsEndpoint: 'position',
            multilang: false,
          },
          {
            label: 'Şöbə - seçin',
            name: 'branchId',
            type: 'select',
            optionsEndpoint: 'branch',
            multilang: false,
          },
          {
            label: 'Department - seçin',
            name: 'departmentId',
            type: 'select',
            optionsEndpoint: 'department',
            multilang: false,
          },
        ]}
        loadingKey="vacancy_loading"
      />
    </Box>
  );
};

export default VacationsCreate;
