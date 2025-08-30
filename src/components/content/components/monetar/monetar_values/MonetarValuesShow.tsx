import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import UserManagement from '../../../uitils/UserManagement';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import { apiRequest } from '../../../../../config/apiRequest';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import Highlighter from '../../../../../shared/Highlighter';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

interface DataInterface {
  id: number;
  date: string | null;
  value: number;
  monetaryIndicatorCategoryTitle: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({
    endpoint: 'MonetaryIndicator',
    method: 'get',
  });
  return res.map((item: any) => ({
    id: item?.id ?? 1,
    date: item?.date ? moment(item?.date).format('DD.MM.YYYY') : null,
    value: item?.value ?? 0,
    monetaryIndicatorCategoryTitle: item?.monetaryIndicatorCategoryTitle ?? '',
  }));
};

const MonetarValuesShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['monetarValues'],
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
    { header: 'Tarix', accessor: 'date' },
    {
      header: 'Dəyər',
      accessor: 'value',
      cell: row => <Text>{row.value}</Text>,
    },
    {
      header: 'Başlıq',
      accessor: 'monetaryIndicatorCategoryTitle',
      cell: row =>
        row.monetaryIndicatorCategoryTitle ? (
          <Highlighter
            text={row.monetaryIndicatorCategoryTitle}
            highlight={searchTerm}
          />
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
        createButtonLocation="/monetar-gostericiler-values/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="MonetaryIndicator" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/monetar-gostericiler-values/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default MonetarValuesShow;
