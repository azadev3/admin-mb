import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const FormerChairmenEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
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

export default FormerChairmenEdit;
