import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const BankNotesValuesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/bank-notes-values"
        title="Mərkəzi Bankın Notları - Dəyərlər"
        contentType="application/json"
        endpoint="banknote"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Faiz Dərəcəsi',
            placeholder: 'Faiz dərəcəsini qeyd edin',
            name: 'percentValue',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Kredit qoyuluşları',
            name: 'banknotecategoryid',
            type: 'select',
            optionsEndpoint: 'banknotecategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="BankNotesValues_loading"
      />
    </Box>
  );
};

export default BankNotesValuesEdit;
