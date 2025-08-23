import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../helpers/form/FormField';

const MonetarCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/monetar-gostericiler-captions"
        title="Monetar Göstəricilər - Başlıqlar"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="MonetaryIndicatorCategory"
        id={Number(id)}
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Slug (AZ)', name: 'slugAz', type: 'text' },
          { label: 'Slug (EN)', name: 'slugEn', type: 'text' },
        ]}
        loadingKey="MonetaryCategory_loading"
      />
    </Box>
  );
};

export default MonetarCategoryEdit;
