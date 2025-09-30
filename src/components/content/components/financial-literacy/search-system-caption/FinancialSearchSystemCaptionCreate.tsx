import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialSearchSystemCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialSearchSystemCaption"
        title="Maliyyə Savadlılığı - Axtarış Sistemi Başlığı"
        contentType="multipart/form-data"
        endpoint="FinancialSearchSystemCaption"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="FinancialSearchSystemCaption_loading"
      />
    </Box>
  );
};

export default FinancialSearchSystemCaptionCreate;
