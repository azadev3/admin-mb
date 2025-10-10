import { Box } from '@chakra-ui/react';
import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CitizenApplicationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/citizenapplication"
        title="Müştəri Hüquqları - Vətəndaş Müraciəti"
        endpoint="citizenapplication"
        contentType="application/json"
        fields={[
          {
            label: 'Kredit Təşkilatlarının Sayı',
            name: 'creditInstitutionCount',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Ödəniş Sisteminin Sayı',
            name: 'paymentSystemCount',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Cari Valyuta Sayı',
            name: 'currencyExchangeCount',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Sığortaçı Sayı',
            name: 'insurerCount',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Kapital Bazarının Sayı',
            name: 'capitalMarketCount',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Digər Say',
            name: 'otherCount',
            type: 'number',
            multilang: false,
          },
          {
            label: 'İl',
            name: 'year',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Ay (seçin)',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
          {
            label: 'Vətəndaş Müraciəti Kateqoriyası (seçin)',
            name: 'citizenApplicationCategoryId',
            type: 'select',
            multilang: false,
            optionsEndpoint: 'citizenapplicationcategory',
          },
        ]}
        loadingKey="citizenapplication_loading"
      />
    </Box>
  );
};

export default CitizenApplicationCreate;
