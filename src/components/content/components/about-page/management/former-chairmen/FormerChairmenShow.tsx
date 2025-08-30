import React, { useMemo, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { apiRequest } from '../../../../../../config/apiRequest';
import DeleteModal from '../../../../../../ui/modals/DeleteModal';
import UserManagement from '../../../../uitils/UserManagement';
import Highlighter from '../../../../../../shared/Highlighter';
import DataTable from '../../../../../../shared/ui/DataTable';
import type { Column } from '../../../../../../shared/ui/model';
import { useQuery } from '@tanstack/react-query';

interface DataInterface {
  id: number;
  date: string;
  fullNameAz: string;
  fullNameEn: string;
  textAz: string;
  textEn: string;
}

const fetchData = async (): Promise<DataInterface[]> => {
  const res = await apiRequest({ endpoint: 'FormerChairman', method: 'get' });
  return Array.isArray(res) ? res : [res];
};

const FormerChairmenShow: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery<DataInterface[], Error>({
    queryKey: ['formerChairmenData'],
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

  const columns: Column<DataInterface>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Tarix', accessor: 'date' },
    {
      header: 'Ad / Soyad (AZ)',
      accessor: 'fullNameAz',
      cell: row =>
        row.fullNameAz ? (
          <Highlighter text={row.fullNameAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Ad / Soyad (EN)',
      accessor: 'fullNameEn',
      cell: row =>
        row.fullNameEn ? (
          <Highlighter text={row.fullNameEn} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Mətn (AZ)',
      accessor: 'textAz',
      cell: row =>
        row.textAz ? (
          <Highlighter text={row.textAz} highlight={searchTerm} />
        ) : (
          <Text>Yoxdur</Text>
        ),
    },
    {
      header: 'Mətn (EN)',
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
        createButtonLocation="/haqqimizda/idareetme-sabiq-sedrler/create"
        onRefresh={refetch}
        dataLoading={isLoading || isFetching}
      />
      <DeleteModal endpoint="FormerChairman" />
      <DataTable
        columns={columns}
        data={filteredData}
        loading={isLoading || isFetching}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        searchTerm={searchTerm}
        onSearch={val => setSearchTerm(val)}
        onEditLocation={item =>
          `/haqqimizda/idareetme-sabiq-sedrler/edit/${item.id}`
        }
        onEdit={() => {}}
        onDelete={() => {}}
        refetch={refetch}
      />
    </VStack>
  );
};

export default FormerChairmenShow;
