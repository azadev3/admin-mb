import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../config/apiRequest';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import UserManagement from '../../uitils/UserManagement';
import Highlighter from '../../../../shared/Highlighter';
import DataTable from '../../../../shared/ui/DataTable';
import type { Column } from '../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  month: number;
  year: number;
  value: number;
}

const MonthsForInflationMap: Record<number, string> = {
  1: 'Yanvar',
  2: 'Fevral',
  3: 'Mart',
  4: 'Aprel',
  5: 'May',
  6: 'İyun',
  7: 'İyul',
  8: 'Avqust',
  9: 'Sentyabr',
  10: 'Oktyabr',
  11: 'Noyabr',
  12: 'Dekabr',
};

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Inflation', method: 'get' });
  return res.map((item: any) => ({
    id: item?.id ?? 1,
    month: item?.month ?? 0,
    year: item?.year ?? 0,
    value: item?.value ?? 0,
  }));
};

const InflationValuesShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['inflation'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az')
    return data.filter(item =>
      Object.values(item).some(
        val => val && String(val).toLocaleLowerCase('az').includes(lower),
      ),
    );
  }, [searchTerm, data]);

  if (error)
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'İl',
      accessor: 'year',
      cell: row =>
        row.year ? (
          <Highlighter text={String(row.year)} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Ay',
      accessor: 'month',
      cell: row =>
        row.month ? (
          <Highlighter
            text={MonthsForInflationMap[row.month] || 'Yoxdur'}
            highlight={searchTerm}
          />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Dəyər',
      accessor: 'value',
      cell: row =>
        row.value ? (
          <Highlighter text={String(row.value)} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  return (
    <VStack
      w="100%"
      align="stretch"
      spacing={4}
      p={4}
      bg="gray.50"
      borderRadius="md"
    >
      <UserManagement
        createButtonLocation="/inflasiya/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="Inflation" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/inflasiya/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default InflationValuesShow;
