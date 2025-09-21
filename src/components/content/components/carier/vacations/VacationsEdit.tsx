import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { VacationTypes } from '../../../../../shared/vacationTypes';

const VacationsEdit: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/carier/vacations/vacation"
        title="Karyera - Vakansiya Əlavə Et"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        endpoint="vacancy"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Ünvan', name: 'location', type: 'text', multilang: true },
          {
            label: 'Vakansiya Tipi (seçin)',
            name: 'type',
            type: 'select',
            options: VacationTypes,
            multilang: false,
          },
          {
            label: 'Mövqe (Position) - seçin',
            name: 'positionId',
            type: 'select',
            optionsEndpoint: 'position',
            multilang: false,
          },
          {
            label: 'Filial (Branch) - seçin',
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
