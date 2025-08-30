import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const StructureCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/teskilati-struktur"
        title="Haqqımızda - Təşkilati Struktur"
      />
      <FormField
        type="create"
        endpoint="StructureCaption"
        contentType="application/json"
        fields={[
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'Açıqlama (AZ)', name: 'DescriptionAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'DescriptionEn', type: 'text' },
        ]}
        loadingKey="StructureCaption_loading"
      />
    </Box>
  );
};

export default StructureCaptionsCreate;
