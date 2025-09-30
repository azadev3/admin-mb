import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const FormerChairmenCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/idareetme-sabiq-sedrler"
        title="Haqqımızda - Sabiq Sədrlər"
        contentType="application/json"
        endpoint="formerchairman"
        fields={[
          {
            label: 'Tam Ad / Soyad',
            name: 'fullname',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Açıqlama',
            name: 'description',
            type: 'text',
            multilang: true,
          },
        ]}
        loadingKey="formerchairman_loading"
      />
    </Box>
  );
};

export default FormerChairmenCreate;
