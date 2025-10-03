import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const BankSectoryCategoryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/bank-sektoru-captions"
        title="Bank Sektoru - Başlıqlar"
        contentType="application/json"
        endpoint="banksectorcategory"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Slug', name: 'slug', type: 'text', multilang: true },
          { label: 'Not', name: 'note', type: 'text', multilang: true },
        ]}
        loadingKey="BankSectorCategory_loading"
      />
    </Box>
  );
};

export default BankSectoryCategoryCreate;
