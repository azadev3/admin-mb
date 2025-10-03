import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';
import { Months } from '../../inflation/InflationValuesCreate';

interface DataInterface {
  id: number;
  creditInstitutionCount: number;
  paymentSystemCount: number;
  currencyExchangeCount: number;
  insurerCount: number;
  capitalMarketCount: number;
  otherCount: number;
  month: number;
  year: number;
  citizenApplicationCategoryTitle: string;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'citizenapplication', method: 'get' });
  if (!res) return [];
  if (res && Array.isArray(res)) return res;

  return [res];
};

const CitizenApplicationShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['citizenapplication'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az');

    const containsSearch = (val: any): boolean => {
      if (val === null || val === undefined) return false;
      if (typeof val === 'string' || typeof val === 'number') {
        return String(val).toLocaleLowerCase('az').includes(lower);
      }
      if (typeof val === 'object') {
        return Object.values(val).some(containsSearch);
      }
      return false;
    };

    return data.filter(item => containsSearch(item));
  }, [searchTerm, data]);

  if (error) return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const dynamicColumns: Column<DataInterface>[] = [
    { header: 'Kredit Təşkilatlarının Sayı', accessor: 'creditInstitutionCount' },
    { header: 'Ödəniş Sisteminin Sayı', accessor: 'paymentSystemCount' },
    { header: 'Cari Valyuta Say', accessor: 'currencyExchangeCount' },
    { header: 'Sığortaçı Sayı', accessor: 'insurerCount' },
    { header: 'Kapital Bazarının Sayı', accessor: 'capitalMarketCount' },
    { header: 'Digər Say', accessor: 'otherCount' },
    { header: 'İl', accessor: 'year' },
    {
      header: 'Ay',
      accessor: 'month',
      cell: row =>
        row.month ? (
          <Text>{Months.find(m => m.value === row.month)?.label ?? ''}</Text>
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Vətəndaş Müraciəti Kateqoriyası',
      accessor: 'citizenApplicationCategoryTitle',
    },
  ];

  return (
    <VStack w="100%" align="stretch" spacing={4} p={4} bg="gray.50" borderRadius="md">
      <UserManagement
        createButtonLocation="/customer-rights/citizenapplication/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="citizenapplication" />
      <DataTable
        columns={dynamicColumns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={(val: any) => setSearchTerm(val)}
        refetch={refetch}
        onEditLocation={item => `/customer-rights/citizenapplication/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </VStack>
  );
};

export default CitizenApplicationShow;
