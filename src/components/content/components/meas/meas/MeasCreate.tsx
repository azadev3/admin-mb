import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MeasCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/meas/MEAS"
        title="MEAS - Məlumatların Elektron Açıqlanması Sistemi"
        endpoint="meas"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Qeydiyyat Vaxtı',
            name: 'RegisterTime',
            type: 'date',
            multilang: false,
          },
          {
            label: 'Qeydiyyat Nömrəsi',
            name: 'RegisterNumber',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Emitent Növü (seçin)',
            name: 'issuerTypeId',
            optionsEndpoint: 'issuertype',
            type: 'select',
            multilang: false,
          },
          {
            label: 'Məlumat Növü (seçin)',
            name: 'informationTypeId',
            optionsEndpoint: 'informationtype',
            type: 'select',
            multilang: false,
          },
          {
            label: 'Qiymətli Kağız Növü (seçin)',
            name: 'SecurityTypeId',
            optionsEndpoint: 'securitytype',
            type: 'select',
            multilang: false,
          },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            accept: '.pdf,.docx,.doc,.xlsx,.xls',
            multilang: false,
          },
        ]}
        loadingKey="meas_loading"
      />
    </Box>
  );
};

export default MeasCreate;
