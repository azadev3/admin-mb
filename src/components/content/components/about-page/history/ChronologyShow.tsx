import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../config/apiRequest';
import DeleteModal from '../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../uitils/UserManagement';
import Highlighter from '../../../../../shared/Highlighter';
import DataTable from '../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  year: number;
  textAz: string;
  textEn: string;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'Chronology', method: 'get' });

  return res.map(
    (item: any): DataInterface => ({
      id: item?.id ?? 1,
      year: item?.year ?? 0,
      textAz: item?.textAz ?? '',
      textEn: item?.textEn ?? '',
    }),
  );
};

const ChronologyShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['chronologyData'],
    queryFn: fetchData,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    const lower = searchTerm.toLocaleLowerCase('az');
    return data.filter(item =>
      Object.values(item).some(
        val => val && String(val).toLocaleLowerCase('az').includes(lower),
      ),
    );
  }, [searchTerm, data]);

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    {
      header: 'İl',
      accessor: 'year',
      cell: row => <Text>{row.year}</Text>,
    },
    {
      header: 'Açıqlama (AZ)',
      accessor: 'textAz',
      cell: row =>
        row.textAz ? (
          <Highlighter text={row.textAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Açıqlama (EN)',
      accessor: 'textEn',
      cell: row =>
        row.textEn ? (
          <Highlighter text={row.textEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
  ];

  if (error) {
    return <Text color="red.500">Xəta baş verdi: {error.message}</Text>;
  }

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
        createButtonLocation="/haqqimizda/tarix-xronologiya/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="Chronology" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item => `/haqqimizda/tarix-xronologiya/edit/${item.id}`}
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default ChronologyShow;
