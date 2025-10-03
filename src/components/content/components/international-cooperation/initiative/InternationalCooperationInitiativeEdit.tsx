import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InternationalCooperationInitiativeEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/InternationalCooperationInitiative"
        title="Beynəlxalq Əməkdaşlıq - Əməkdaşlıq Təşəbbüsü"
        endpoint="InternationalCooperationInitiative"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.pdf,.doc,.docx',
          },
        ]}
        loadingKey="InternationalCooperationInitiative_loading"
      />
    </Box>
  );
};

export default InternationalCooperationInitiativeEdit;
