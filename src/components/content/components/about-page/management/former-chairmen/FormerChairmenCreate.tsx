import { Box } from '@chakra-ui/react';
import FormField from '../../../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const FormerChairmenCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/idareetme-sabiq-sedrler"
        title="Haqqımızda - Sabiq Sədrlər"
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="FormerChairman"
        fields={[
          {
            label: 'Ad / Soyad (AZ)',
            name: 'fullNameAz',
            type: 'text',
          },
          {
            label: 'Ad / Soyad (EN)',
            name: 'fullNameEn',
            type: 'text',
          },
          {
            label: 'Mətn (AZ)',
            name: 'textAz',
            type: 'text',
          },
          {
            label: 'Mətn (EN)',
            name: 'textEn',
            type: 'text',
          },
          {
            label: 'Tarix',
            name: 'date',
            type: 'text',
            placeholder: 'İyul 1930-1933',
          },
        ]}
        loadingKey="FormerChairman_loading"
      />
    </Box>
  );
};

export default FormerChairmenCreate;
