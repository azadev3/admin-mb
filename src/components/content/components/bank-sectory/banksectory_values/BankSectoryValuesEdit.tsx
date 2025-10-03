import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const BankSectoryValuesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
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
        loadingKey="BankSector_loading"
      />
    </Box>
  );
};

export default BankSectoryValuesEdit;
