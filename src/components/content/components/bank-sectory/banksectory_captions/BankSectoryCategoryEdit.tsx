import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const BankSectoryCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/bank-sektoru-captions"
        title="Bank Sektoru - Başlıqlar"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="BankSectorCategory"
        id={Number(id)}
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Slug (AZ)', name: 'slugAz', type: 'text' },
          { label: 'Slug (EN)', name: 'slugEn', type: 'text' },
        ]}
        loadingKey="BankSectorCategory_loading"
      />
    </Box>
  );
};

export default BankSectoryCategoryEdit;
