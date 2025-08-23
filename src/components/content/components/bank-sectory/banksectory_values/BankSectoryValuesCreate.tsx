import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../helpers/form/FormField';

const BankSectoryValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/bank-sektoru-values"
        title="Bank Sektoru - Dəyərlər"
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="BankSector"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Kredit qoyuluşları',
            name: 'bankSectorCategoryId',
            type: 'select',
            optionsEndpoint: 'BankSectorCategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="BankSectoryValues_loading"
      />
    </Box>
  );
};

export default BankSectoryValuesCreate;
