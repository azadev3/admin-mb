import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import UserManagement from '../../uitils/UserManagement';
import DeleteModal from '../../../../ui/modals/DeleteModal';
import DataTable from '../../../../shared/ui/DataTable';
import Highlighter from '../../../../shared/Highlighter';
import type { Column } from '../../../../shared/ui/model';
import { apiRequest } from '../../../../config/apiRequest';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  key: string | null;
  valueAz: string | null;
  valueEn: string | null;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Translate', method: 'get' });
  return res;
};

const TranslatesShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['translates'],
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
      header: 'Key (Açar söz)',
      accessor: 'key',
      cell: row =>
        row.key ? (
          <Highlighter text={row.key} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Dəyər (Azərbaycan dilində)',
      accessor: 'valueAz',
      cell: row =>
        row.valueAz ? (
          <Highlighter text={row.valueAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Dəyər (İngilis dilində)',
      accessor: 'valueEn',
      cell: row =>
        row.valueEn ? (
          <Highlighter text={row.valueEn} highlight={searchTerm} />
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
        createButtonLocation="/tercumeler/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="Translate" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/tercumeler/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default TranslatesShow;
