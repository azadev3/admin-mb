import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const DigitalPortalEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/digital-portal-cards"
        title="Digital Portal - Əlavə Et"
      />
      <FormField
        type="edit"
        id={Number(id)}
        endpoint="DigitalPortal"
        contentType="application/json"
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Mətn (AZ)', name: 'subTitleAz', type: 'text' },
          { label: 'Mətn (EN)', name: 'subTitleEn', type: 'text' },
        ]}
        loadingKey="DigitalPortal_loading"
      />
    </Box>
  );
};

export default DigitalPortalEdit;
