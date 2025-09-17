import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import UserManagement from '../../../uitils/UserManagement';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import DataTable from '../../../../../shared/ui/DataTable';
import Highlighter from '../../../../../shared/Highlighter';
import type { Column } from '../../../../../shared/ui/model';
import { apiRequest } from '../../../../../config/apiRequest';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

interface DataInterface {
  id: number;
  date: string | null;
  value: number;
  percentCategoryTitle: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'percentcorridor', method: 'get' });
  return res.map((item: any) => ({
    id: item?.id ?? 1,
    date: item?.date ? moment(item?.date).format('DD.MM.YYYY') : null,
    value: item?.value ?? 0,
    percentCategoryTitle: item?.percentCategoryTitle ?? '',
  }));
};

const PercentValuesShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['percentValues'],
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

  if (error)
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Tarix', accessor: 'date' },
    {
      header: 'Dəyər',
      accessor: 'value',
      cell: row => <Text>{row.value}</Text>,
    },
    {
      header: 'Başlıq',
      accessor: 'percentCategoryTitle',
      cell: row =>
        row.percentCategoryTitle ? (
          <Highlighter text={row.percentCategoryTitle} highlight={searchTerm} />
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
        createButtonLocation="/faiz-dehlizi-values/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="percentcorridor" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/faiz-dehlizi-values/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default PercentValuesShow;
