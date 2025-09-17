import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const BankSectoryValuesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/bank-sektoru-values"
        title="Bank Sektoru - Dəyərlər"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="banksector"
        id={Number(id)}
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
