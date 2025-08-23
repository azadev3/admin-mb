import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../helpers/form/FormField';

const MonetarCategoryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/monetar-gostericiler-captions"
        title="Monetar Göstəricilər - Başlıqlar"
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="MonetaryIndicatorCategory"
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Slug (AZ)', name: 'slugAz', type: 'text' },
          { label: 'Slug (EN)', name: 'slugEn', type: 'text' },
        ]}
        loadingKey="MonetarCategory_loading"
      />
    </Box>
  );
};

export default MonetarCategoryCreate;
