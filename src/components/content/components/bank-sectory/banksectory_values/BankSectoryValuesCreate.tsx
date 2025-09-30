import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const BankSectoryValuesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/bank-sektoru-values"
        title="Bank Sektoru - Dəyərlər"
        contentType="application/json"
        endpoint="banksector"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Kredit qoyuluşları',
            name: 'banksectorcategoryid',
            type: 'select',
            optionsEndpoint: 'banksectorcategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="BankSectoryValues_loading"
      />
    </Box>
  );
};

export default BankSectoryValuesCreate;
