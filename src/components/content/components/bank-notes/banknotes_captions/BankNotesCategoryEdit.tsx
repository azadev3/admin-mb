import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const BankNotesCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/bank-notes-captions"
        title="Mərkəzi Bankın Notları - Başlıqlar"
        contentType="application/json"
        endpoint="banknotecategory"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Qısa Başlıq',
            name: 'shortTitle',
            type: 'text',
            multilang: true,
          },
          { label: 'Slug', name: 'slug', type: 'text', multilang: true },
          { label: 'Not', name: 'note', type: 'text', multilang: true },
        ]}
        loadingKey="BankNotesCategory_loading"
      />
    </Box>
  );
};

export default BankNotesCategoryEdit;
