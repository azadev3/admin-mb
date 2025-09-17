import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const BankNotesValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/bank-notes-values"
        title="Mərkəzi Bankın Notları - Dəyərlər"
      />
      <FormField
        type="create"
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

export default BankNotesValuesCreate;
