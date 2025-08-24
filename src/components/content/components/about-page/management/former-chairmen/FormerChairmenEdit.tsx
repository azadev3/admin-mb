import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../helpers/form/FormField';

const FormerChairmenEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/idareetme-sabiq-sedrler"
        title="Haqqımızda - Sabiq Sədrlər"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="FormerChairman"
        id={Number(id)}
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
        loadingKey="FormerChairmen_loading"
      />
    </Box>
  );
};

export default FormerChairmenEdit;
