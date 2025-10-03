import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const NominationCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/Nomination"
        title="Ödəniş Sistemləri - Nominasiyalar"
        contentType="application/json"
        endpoint="Nomination"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.pdf,.xlsx,.xls,.docx,.doc',
          },
          {
            label: 'Nominasiya Kateqoriyası (seçin)',
            name: 'nominationCategoryId',
            type: 'select',
            optionsEndpoint: 'NominationCategory',
            multilang: false,
          },
        ]}
        loadingKey="NominationCategory_loading"
      />
    </Box>
  );
};

export default NominationCategoryEdit;
