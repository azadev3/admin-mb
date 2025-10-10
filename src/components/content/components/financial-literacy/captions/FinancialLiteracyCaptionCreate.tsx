import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialLiteracyCaption"
        title="Maliyyə Savadlılığı - Başlıqlar"
        contentType="application/json"
        endpoint="FinancialLiteracyCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Iframe URL',
            name: 'url',
            type: 'rich-text',
            multilang: false,
            placeholder: "<iframe src='example' />",
          },
        ]}
        loadingKey="FinancialLiteracyCaption_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyCaptionCreate;
