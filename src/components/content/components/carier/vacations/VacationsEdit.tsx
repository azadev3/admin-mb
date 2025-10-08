import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// import { VacationTypes } from '../../../../../shared/vacationTypes';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';
import { VacationTypes } from '../../../../../shared/vacationTypes';

const VacationsEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
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
            label: 'Məşğulluq Növü (seçin)',
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
        loadingKey="vacation_loading"
      />
    </Box>
  );
};

export default VacationsEdit;
